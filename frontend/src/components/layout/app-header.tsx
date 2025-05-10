import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SidebarTrigger } from "../ui/sidebar";
import { useKeycloak } from "../../hooks/use-keycloak";

export function AppHeader() {
  const { usuario, keycloak, realm } = useKeycloak();

  const handleLogout = async () => {
    try {
      await keycloak?.logout({
        redirectUri: `${window.location.origin}/${realm}/login`,
      });
      sessionStorage.clear();
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center">
        <SidebarTrigger className="mr-2" />
      </div>

      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="" alt={usuario?.nome || ""} />

                <AvatarFallback>
                  {usuario?.nome?.charAt(0).toUpperCase() || (
                    <User className="h-4 w-4" />
                  )}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            {usuario && (
              <>
                <DropdownMenuLabel>
                  <div className="flex flex-col text-xs">
                    <span className="font-semibold">{usuario.nome}</span>

                    <span className="text-muted-foreground">
                      {usuario.email}
                    </span>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
              </>
            )}

            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
