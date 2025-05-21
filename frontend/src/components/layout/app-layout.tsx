import { AppHeader } from "./app-header";
import { useAuthGuard } from "../../hooks/use-auth-guard";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  useAuthGuard();

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
