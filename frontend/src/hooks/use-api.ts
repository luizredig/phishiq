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
        const response = await api[method](
          url,
          method === "get" ? config : data,
          method !== "get" ? config : undefined
        );
        return response.data as T;
      } catch (err: any) {
        const message =
          err.response?.data?.message || "Ocorreu um erro. Tente novamente.";
        setError(message);

        if (err.response?.status === 401) {
          // logout();
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
