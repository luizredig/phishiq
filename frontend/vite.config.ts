/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

const tenantFromMode = (m: string) => {
  const i = m.indexOf(".");
  return i === -1 ? m : m.slice(i + 1);
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const tenant = tenantFromMode(mode);

  return {
    plugins: [react()],
    server: {
      port: Number(env.VITE_PORT),
      host: "0.0.0.0",
    },
    resolve: {
      alias: {
        "@tenant": resolve(__dirname, `src/tenants/${tenant}`),
        "@": resolve(__dirname, "src"),
      },
    },
  };
});
