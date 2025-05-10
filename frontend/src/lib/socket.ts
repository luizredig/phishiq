import { io } from "socket.io-client";

// Cria uma instância do socket com autoConnect=false para controlar manualmente a conexão
export const socket = io(import.meta.env.VITE_API_URL || "", {
  autoConnect: false,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 10,
  transports: ["websocket", "polling"],
});
