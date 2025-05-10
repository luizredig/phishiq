import { AppSidebar } from "./app-sidebar";
import { AppHeader } from "./app-header";
import { SidebarProvider } from "../ui/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
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
