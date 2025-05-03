'use client'

import {
  ChartNoAxesCombined,
  Cpu,
  Grid2x2Plus,
  Megaphone,
  Plus,
  TestTubeDiagonal,
  UsersIcon,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

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
} from '@/components/ui/sidebar'

import { useAuth } from '@/contexts/auth-provider'
import { Button } from '../ui/button'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isAdmin } = useAuth()
  const pathname = usePathname()

  const data = {
    navMain: [
      {
        items: [
          {
            title: 'Dashboard',
            url: '/dashboard',
            icon: <ChartNoAxesCombined className={'text-primary'} />,
            show: isAdmin,
          },
          {
            title: 'Testes',
            url: '/tests',
            icon: <TestTubeDiagonal className={'text-primary'} />,
            show: isAdmin,
          },
          {
            title: 'Campanhas',
            url: '/campaigns',
            icon: <Megaphone className={'text-primary'} />,
            show: isAdmin,
          },
        ],
      },
      {
        items: [
          {
            title: 'Usuários',
            url: '/users',
            icon: <UsersIcon className={'text-primary'} />,
            show: isAdmin,
          },
          {
            title: 'Departamentos',
            url: '/departments',
            icon: <Grid2x2Plus className={'text-primary'} />,
            show: isAdmin,
          },
        ],
      },
      {
        items: [
          {
            title: 'Logs',
            url: '/logs',
            icon: <Cpu className={'text-primary'} />,
            show: isAdmin,
          },
        ],
      },
    ],
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href={'/dashboard'}>
          <h1 className="text-primary pl-2 text-xl font-bold select-none">
            PhishIQ
          </h1>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {isAdmin && (
          <div className="w-full p-2">
            <Link href={'/tests/create'}>
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
                    <Link href={item.url} key={item.title}>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <div
                            className={`flex items-center gap-2 rounded-md px-2 py-1 ${
                              pathname === item.url
                                ? 'bg-muted'
                                : 'hover:bg-muted'
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
  )
}
