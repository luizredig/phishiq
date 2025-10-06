import { AppHeader } from "./app-header";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { useAuth } from "../../contexts/auth-context";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex w-full flex-1 flex-col overflow-hidden">
        <AppHeader />

        <div className="flex flex-1 p-4">{children}</div>
      </div>
    </SidebarProvider>
  );
}
