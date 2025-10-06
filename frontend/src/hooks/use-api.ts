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
        // lê tokens atualizados a cada requisição
        let parsed: any = null;
        try {
          const saved = localStorage.getItem("auth_tokens");
          parsed = saved ? JSON.parse(saved) : null;
        } catch {}
        const accessToken = parsed?.accessToken as string | undefined;
        const headers = accessToken
          ? { Authorization: `Bearer ${accessToken}` }
          : undefined;
        const response = await api[method](
          url,
          method === "get"
            ? { ...config, headers: { ...(config?.headers || {}), ...headers } }
            : data,
          method !== "get"
            ? { ...config, headers: { ...(config?.headers || {}), ...headers } }
            : undefined
        );
        return response.data as T;
      } catch (err: any) {
        const message =
          err.response?.data?.message || "Ocorreu um erro. Tente novamente.";
        setError(message);
        // 401: tenta refresh automático uma vez
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
                const headers2 = { Authorization: `Bearer ${newAT}` };
                const retry = await api[method](
                  url,
                  method === "get"
                    ? {
                        ...config,
                        headers: { ...(config?.headers || {}), ...headers2 },
                      }
                    : data,
                  method !== "get"
                    ? {
                        ...config,
                        headers: { ...(config?.headers || {}), ...headers2 },
                      }
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
    [] // [logout]
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
