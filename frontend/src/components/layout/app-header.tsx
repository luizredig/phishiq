import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { useAuth } from "../../contexts/auth-context";
import { LogOutIcon } from "lucide-react";

export function AppHeader() {
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center">
        <SidebarTrigger className="mr-2 text-primary" />
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="default"
          onClick={() => logout()}
          className="font-medium"
        >
          <LogOutIcon className="text-primary-foreground" />
          <p className="text-primary-foreground">{"Sair"}</p>
        </Button>
      </div>
    </header>
  );
}
