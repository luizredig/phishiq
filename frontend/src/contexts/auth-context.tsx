import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useApi } from "../hooks/use-api";

type AuthUser = {
  id?: string;
  name?: string;
  email?: string;
  roles?: string[];
  tenant_id?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (data: {
    name: string;
    email: string;
    password: string;
    roles?: string[];
  }) => Promise<boolean>;
  refresh: () => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "auth_tokens";

export function AuthProvider({ children }: { children: any }) {
  const { get, post, loading, error } = useApi();
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return null;
      const parsed = JSON.parse(saved);
      return parsed.accessToken || null;
    } catch {
      return null;
    }
  });
  const [refreshToken, setRefreshToken] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return null;
      const parsed = JSON.parse(saved);
      return parsed.refreshToken || null;
    } catch {
      return null;
    }
  });
  const [user, setUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return null;
      const parsed = JSON.parse(saved);
      return parsed.user || null;
    } catch {
      return null;
    }
  });

  const persist = useCallback(
    (data: {
      accessToken: string;
      refreshToken: string;
      user?: AuthUser | null;
    }) => {
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      if (data.user !== undefined) setUser(data.user);
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            user: data.user ?? user,
          })
        );
      } catch {}
    },
    [user]
  );

  const fetchProfile = useCallback(async () => {
    const me = await get<{ name: string; email: string }>("/auth/me");
    if (me) {
      const merged: AuthUser = { ...user, name: me.name, email: me.email };
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            accessToken,
            refreshToken,
            user: merged,
          })
        );
      } catch {}
      setUser(merged);
    }
  }, [get, user, accessToken, refreshToken]);

  const login = useCallback(
    async (email: string, password: string) => {
      const result = await post<{ accessToken: string; refreshToken: string }>(
        "/auth/login",
        { email, password }
      );
      if (!result) return false;
      persist({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        user,
      });
      await fetchProfile();
      return true;
    },
    [post, persist, user, fetchProfile]
  );

  const signup = useCallback(
    async (data: {
      name: string;
      email: string;
      password: string;
      roles?: string[];
    }) => {
      const result = await post<{ accessToken: string; refreshToken: string }>(
        "/auth/signup",
        data
      );
      if (!result) return false;
      persist({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        user,
      });
      await fetchProfile();
      return true;
    },
    [post, persist, user, fetchProfile]
  );

  const refresh = useCallback(async () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return false;
      const parsed = JSON.parse(saved);
      if (!parsed.refreshToken) return false;
      const result = await post<{ accessToken: string; refreshToken: string }>(
        "/auth/refresh-token",
        {
          refresh_token: parsed.refreshToken,
        }
      );
      if (!result) return false;
      persist({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        user,
      });
      return true;
    } catch {
      return false;
    }
  }, [post, persist, user]);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      accessToken,
      refreshToken,
      isAuthenticated: !!accessToken,
      loading,
      error,
      login,
      signup,
      refresh,
      logout,
    }),
    [
      user,
      accessToken,
      refreshToken,
      loading,
      error,
      login,
      signup,
      refresh,
      logout,
    ]
  );

  useEffect(() => {
    if (accessToken && (!user || !user.name || !user.email)) {
      fetchProfile();
    }
  }, [accessToken, user, fetchProfile]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
