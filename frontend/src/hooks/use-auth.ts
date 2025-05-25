/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  refresh_expires_in: number;
}

interface UserInfo {
  name: string;
  email: string;
  roles: string[];
}

export function useAuth() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const refreshToken = useCallback(async () => {
    try {
      const currentRefreshToken = localStorage.getItem("refresh_token");
      if (!currentRefreshToken) {
        throw new Error("No refresh token available");
      }

      const response = await fetch("http://localhost:1421/keycloak/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token: currentRefreshToken }),
      });

      if (!response.ok) {
        throw new Error("Failed to refresh token");
      }

      const data: TokenResponse = await response.json();
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      localStorage.setItem(
        "token_expiry",
        String(Date.now() + data.expires_in * 1000)
      );

      return data.access_token;
    } catch (error) {
      console.error("Error refreshing token:", error);
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("token_expiry");
      navigate("/login");
      throw error;
    }
  }, [navigate]);

  const getValidToken = useCallback(async () => {
    const accessToken = localStorage.getItem("access_token");
    const tokenExpiry = localStorage.getItem("token_expiry");

    if (!accessToken || !tokenExpiry) {
      throw new Error("No token available");
    }

    // If token expires in less than 30 seconds, refresh it
    if (Date.now() > Number(tokenExpiry) - 30000) {
      return refreshToken();
    }

    return accessToken;
  }, [refreshToken]);

  const fetchUserInfo = useCallback(async () => {
    try {
      const token = await getValidToken();
      const response = await fetch("http://localhost:1421/keycloak/user-info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user info");
      }

      const data = await response.json();
      setUserInfo(data);
      return data;
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  }, [getValidToken]);

  useEffect(() => {
    const checkTokenExpiry = async () => {
      try {
        await getValidToken();
        await fetchUserInfo();
      } catch (error) {
        // Token validation failed, user will be redirected to login
      }
    };

    checkTokenExpiry();
    const interval = setInterval(checkTokenExpiry, 30000);
    return () => clearInterval(interval);
  }, [getValidToken, fetchUserInfo]);

  const isAdmin = useCallback(async () => {
    if (!userInfo) {
      const data = await fetchUserInfo();
      return data.roles?.includes("ADMIN") ?? false;
    }
    return userInfo.roles?.includes("ADMIN") ?? false;
  }, [userInfo, fetchUserInfo]);

  return { getValidToken, refreshToken, userInfo, isAdmin };
}
