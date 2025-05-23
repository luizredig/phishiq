"use client";

import { useToast } from "../../hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";

interface ToasterProps {
  position?: string;
  duration?: number;
}

export function Toaster({
  position = "top-right",
  duration = 3000,
}: ToasterProps) {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      <div
        className={`toaster ${position}`}
        style={{ transitionDuration: `${duration}ms` }}
      >
        {toasts.map(function ({ id, title, description, action, ...props }) {
          return (
            <Toast key={id} {...props}>
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              {action}
              <ToastClose />
            </Toast>
          );
        })}
      </div>
      <ToastViewport />
    </ToastProvider>
  );
}
