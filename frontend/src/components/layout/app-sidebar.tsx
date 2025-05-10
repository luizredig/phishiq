import { Users, Calendar, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "../ui/sidebar";
import { useKeycloak } from "../../hooks/use-keycloak";
import { useState, useEffect } from "react";
import { api } from "../../lib/axios";
import LoadingSpinner from "./loading-spinner";

type SidebarItem = {
  href: string;
  icon: React.ElementType;
  title: string;
  visible: boolean;
};

export function AppSidebar() {
  const { realm, isAdmin, roles, usuario, token, initialized } = useKeycloak();

  const isVisitante = roles.includes("VISITANTE");
  const [userApproved, setUserApproved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { isMobile, setOpenMobile } = useSidebar();

  const handleClick = () => {
    if (isMobile) setOpenMobile(false);
  };

  useEffect(() => {
    if (!initialized) return;

    if (!isVisitante || isAdmin || !usuario?.id || !token) return;

    const checkCadastroStatus = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(`/usuarios/keycloak/${usuario.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const status = response?.data?.statusCadastro;
        if (status === "APROVADO") {
          setUserApproved(true);
        } else {
          setUserApproved(false);
        }
      } catch (error) {
        console.error("Erro ao verificar status do cadastro:", error);
        setUserApproved(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkCadastroStatus();
  }, [initialized, isVisitante, isAdmin, usuario?.id, token]);

  const isVisitanteWithAccess = isVisitante && !isAdmin && userApproved;

  const sidebarItems: SidebarItem[] = [
    {
      href: "/agendamentos/",
      icon: Calendar,
      title: "Agendamentos",
      visible: isAdmin,
    },
    {
      href: "/agendamentos/visitante",
      icon: Calendar,
      title: "Meus Agendamentos",
      visible: isVisitanteWithAccess,
    },
    {
      href: "/usuarios",
      icon: Users,
      title: "Usuários",
      visible: isAdmin,
    },
    {
      href: "/usuarios/pendentes",
      icon: AlertCircle,
      title: "Pendências de Cadastro",
      visible: isAdmin,
    },
    {
      href: "/cadastro-pendente",
      icon: AlertCircle,
      title: "Status do Cadastro",
      visible: isVisitante && !isAdmin && !userApproved,
    },
  ];

  if (isLoading && isVisitante && !isAdmin) {
    return (
      <Sidebar>
        <SidebarContent className="p-3">
          <div className="flex justify-center py-4">
            <LoadingSpinner />
          </div>
        </SidebarContent>
      </Sidebar>
    );
  }

  return (
    <Sidebar>
      <SidebarContent className="p-3">
        <SidebarMenu>
          {sidebarItems
            .filter((item) => item.visible)
            .map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild>
                  <Link to={`/${realm}${item.href}`} onClick={handleClick}>
                    <item.icon className="mr-2 h-4 w-4" />

                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
