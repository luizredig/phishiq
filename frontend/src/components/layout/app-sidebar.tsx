import {
  ChartNoAxesCombined,
  Cpu,
  Grid2x2Plus,
  Megaphone,
  Plus,
  TestTubeDiagonal,
  UsersIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "../../components/ui/sidebar";

import { Button } from "../ui/button";
import { useKeycloak } from "../../hooks/use-keycloak";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isAdmin } = useKeycloak();
  const location = useLocation();
  const pathname = location.pathname;

  const data = {
    navMain: [
      {
        items: [
          {
            title: "Dashboard",
            url: "/inicio",
            icon: <ChartNoAxesCombined className={"text-primary"} />,
            show: isAdmin,
          },
          {
            title: "Testes",
            url: "/testes",
            icon: <TestTubeDiagonal className={"text-primary"} />,
            show: isAdmin,
          },
          {
            title: "Campanhas",
            url: "/campanhas",
            icon: <Megaphone className={"text-primary"} />,
            show: isAdmin,
          },
        ],
      },
      {
        items: [
          {
            title: "Usuários",
            url: "/usuarios",
            icon: <UsersIcon className={"text-primary"} />,
            show: isAdmin,
          },
          {
            title: "Departamentos",
            url: "/departamentos",
            icon: <Grid2x2Plus className={"text-primary"} />,
            show: isAdmin,
          },
        ],
      },
      {
        items: [
          {
            title: "Logs",
            url: "/logs",
            icon: <Cpu className={"text-primary"} />,
            show: isAdmin,
          },
        ],
      },
    ],
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to="/dashboard">
          <h1 className="text-primary pl-2 text-xl font-bold select-none">
            PhishIQ
          </h1>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {isAdmin && (
          <div className="w-full p-2">
            <Link to="/testes/criar">
              <Button className="w-full">
                <Plus /> Novo teste
              </Button>
            </Link>
          </div>
        )}

        {data.navMain.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items
                  .filter((item) => item.show)
                  .map((item) => (
                    <Link to={item.url} key={item.title}>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <div
                            className={`flex items-center gap-2 rounded-md px-2 py-1 ${
                              pathname === item.url
                                ? "bg-muted"
                                : "hover:bg-muted"
                            }`}
                          >
                            {item.icon}
                            {item.title}
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </Link>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
