/* eslint-disable @typescript-eslint/no-unused-vars */
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SidebarTrigger } from "../ui/sidebar";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { useAuth } from "../../hooks/use-auth";

interface UserInfo {
  name: string;
  email: string;
  picture?: string;
}

export function AppHeader() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const { getValidToken } = useAuth();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = await getValidToken();

        const response = await fetch(
          "http://localhost:1421/keycloak/user-info",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          console.error("Failed to fetch user info:", {
            status: response.status,
            statusText: response.statusText,
            error: await response.text(),
          });
          window.location.href = "/login";
          return;
        }

        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [getValidToken]);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("token_expiry");
    window.location.href =
      "http://localhost:8080/realms/phishiq/protocol/openid-connect/logout?client_id=phishiq-cli&post_logout_redirect_uri=http://localhost:1413/login";
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center">
        <SidebarTrigger className="mr-2 text-primary" />
      </div>

      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              {loading ? (
                <Skeleton className="h-10 w-10 rounded-full" />
              ) : (
                <Avatar>
                  <AvatarImage src={userInfo?.picture} alt={userInfo?.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                    {userInfo?.name ? (
                      getInitials(userInfo.name)
                    ) : (
                      <Skeleton className="h-6 w-6 rounded-full" />
                    )}
                  </AvatarFallback>
                </Avatar>
              )}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            {loading ? (
              <>
                <div className="p-2">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-3 w-32" />
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <div className="flex flex-col items-start p-2">
                  <span className="font-semibold">{userInfo?.name || "?"}</span>
                  <span className="text-muted-foreground text-sm">
                    {userInfo?.email || ""}
                  </span>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
