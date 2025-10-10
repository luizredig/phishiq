import { useState, useCallback } from "react";
import { api } from "../lib/axios";

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async <T>(
      method: "get" | "post" | "put" | "patch" | "delete",
      url: string,
      data?: any,
      config?: any
    ): Promise<T | null> => {
      setLoading(true);
      setError(null);

      try {
        let parsed: any = null;
        try {
          const saved = localStorage.getItem("auth_tokens");
          parsed = saved ? JSON.parse(saved) : null;
        } catch {}
        const accessToken = parsed?.accessToken as string | undefined;
        const mergedHeaders = {
          ...(config?.headers || {}),
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        };

        const response = await api[method](
          url,
          method === "get" ? { ...config, headers: mergedHeaders } : data,
          method !== "get" ? { ...config, headers: mergedHeaders } : undefined
        );

        return response.data as T;
      } catch (err: any) {
        const message =
          err.response?.data?.message || "Ocorreu um erro. Tente novamente.";
        setError(message);

        if (err.response?.status === 401) {
          try {
            const saved = localStorage.getItem("auth_tokens");
            const parsed = saved ? JSON.parse(saved) : null;
            const refreshToken = parsed?.refreshToken as string | undefined;
            if (refreshToken) {
              const refreshResp = await api.post("/auth/refresh-token", {
                refresh_token: refreshToken,
              });
              const { accessToken: newAT, refreshToken: newRT } =
                refreshResp.data || {};
              if (newAT && newRT) {
                localStorage.setItem(
                  "auth_tokens",
                  JSON.stringify({
                    accessToken: newAT,
                    refreshToken: newRT,
                    user: parsed?.user || null,
                  })
                );

                try {
                  api.defaults.headers.common[
                    "Authorization"
                  ] = `Bearer ${newAT}`;
                } catch {}
                const mergedHeaders2 = {
                  ...(config?.headers || {}),
                  Authorization: `Bearer ${newAT}`,
                };

                const retry = await api[method](
                  url,
                  method === "get"
                    ? { ...config, headers: mergedHeaders2 }
                    : data,
                  method !== "get"
                    ? { ...config, headers: mergedHeaders2 }
                    : undefined
                );

                return retry.data as T;
              }
            }
          } catch {}
        }

        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    loading,
    error,
    get: <T>(url: string, config?: any) => request<T>("get", url, config),
    post: <T>(url: string, data?: any, config?: any) =>
      request<T>("post", url, data, config),
    put: <T>(url: string, data?: any, config?: any) =>
      request<T>("put", url, data, config),
    patch: <T>(url: string, data?: any, config?: any) =>
      request<T>("patch", url, data, config),
    delete: <T>(url: string, config?: any) => request<T>("delete", url, config),
  };
}
