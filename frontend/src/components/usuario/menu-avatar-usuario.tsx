'use client'

import type React from 'react'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, Pencil, Settings, ChevronDown, UserIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type UserDropdownVariant =
  | 'default'
  | 'minimal'
  | 'expanded'
  | 'button'
  | 'status'

interface UserDropdownProps {
  user: {
    nome: string
    email: string
  }
  variant?: UserDropdownVariant
  onEditProfile?: () => void

  onSettings?: () => void

  onLogout?: () => void

  additionalMenuItems?: React.ReactNode
  additionalMenuGroups?: React.ReactNode
  className?: string
}

export function UserDropdown({
  user,
  variant = 'default',
  onEditProfile = () => {},

  onSettings = () => {},

  onLogout = () => {},

  additionalMenuItems,
  additionalMenuGroups,
  className,
}: UserDropdownProps) {
  const [open, setOpen] = useState(false)

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])

      .join('')
      .toUpperCase()
  }

  const statusColors = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
    offline: 'bg-gray-400',
  }

  const renderTrigger = () => {
    switch (variant) {
      case 'minimal':
        return (
          <button className="focus-visible:ring-ring hover:ring-ring rounded-full ring-offset-2 outline-none hover:ring-2 hover:ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2">
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src={''} alt={user.nome} />

              <AvatarFallback className="bg-primary text-primary-foreground text-xs select-none">
                {getInitials(user.nome)}
              </AvatarFallback>
            </Avatar>
          </button>
        )

      case 'expanded':
        return (
          <button className="focus-visible:ring-ring hover:ring-ring flex items-center gap-2 rounded-lg border p-2 ring-offset-2 outline-none hover:ring-2 hover:ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2">
            <Avatar className="h-10 w-10 cursor-pointer">
              <AvatarImage src={''} alt={user.nome} />

              <AvatarFallback className="bg-primary text-primary-foreground select-none">
                {getInitials(user.nome)}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col items-start">
              <span className="text-sm font-medium">{user.nome}</span>

              <span className="text-muted-foreground text-xs">
                {user.email}
              </span>
            </div>

            <ChevronDown className="text-muted-foreground ml-2 h-4 w-4" />
          </button>
        )

      case 'button':
        return (
          <button className="bg-background hover:bg-accent focus-visible:ring-ring flex items-center gap-2 rounded-lg border px-3 py-2 ring-offset-2 outline-none hover:ring-2 hover:ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2">
            <Avatar className="h-6 w-6 cursor-pointer">
              <AvatarImage src={''} alt={user.nome} />

              <AvatarFallback className="bg-primary text-primary-foreground text-xs select-none">
                {getInitials(user.nome)}
              </AvatarFallback>
            </Avatar>

            <span className="text-sm">{user.nome}</span>

            <ChevronDown className="text-muted-foreground ml-1 h-3 w-3" />
          </button>
        )

      case 'status':
        return (
          <button className="focus-visible:ring-ring hover:ring-ring relative rounded-full ring-offset-2 outline-none hover:ring-2 hover:ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2">
            <Avatar className="h-10 w-10 cursor-pointer">
              <AvatarImage src={''} alt={user.nome} />

              <AvatarFallback className="select-none bg-primary text-primary-foreground">
                {getInitials(user.nome)}
              </AvatarFallback>
            </Avatar>

            {/* <span
              className={cn(
                'border-background absolute right-0 bottom-0 h-3 w-3 rounded-full border-2',
                user.status ? statusColors[user.status] : 'bg-gray-400',
              )}
            /> */}
          </button>
        )
      default:
        return (
          <button className="focus-visible:ring-ring hover:ring-ring rounded-full ring-offset-2 outline-none hover:ring-2 hover:ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2">
            <Avatar className="h-10 w-10 cursor-pointer">
              <AvatarImage src={''} alt={user.nome} />

              <AvatarFallback className="bg-primary text-primary-foreground select-none">
                {getInitials(user.nome)}
              </AvatarFallback>
            </Avatar>
          </button>
        )
    }
  }

  const renderContent = () => {
    const commonMenuItems = (
      <>
        <DropdownMenuItem onClick={onSettings}>
          <Settings className="mr-2 h-4 w-4" />

          <span>Configurações</span>
        </DropdownMenuItem>

        {additionalMenuItems}
      </>
    )

    switch (variant) {
      case 'minimal':
        return (
          <>
            <DropdownMenuLabel className="font-normal">
              <p className="text-sm leading-none font-medium">{user.nome}</p>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>{commonMenuItems}</DropdownMenuGroup>

            {additionalMenuGroups}
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />

              <span>Sair</span>
            </DropdownMenuItem>
          </>
        )

      case 'expanded':
        return (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm leading-none font-medium">{user.nome}</p>

                <p className="text-muted-foreground text-xs leading-none">
                  {user.email}
                </p>

                {/* {user.role && (
                  <Badge variant="outline" className="mt-1 text-xs">
                    {user.role}
                  </Badge>
                )} */}
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem onClick={onEditProfile}>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={''} alt={user.nome} />

                    <AvatarFallback className="select-none">
                      {getInitials(user.nome)}
                    </AvatarFallback>
                  </Avatar>

                  <span>Edit Profile</span>
                </div>

                <Pencil className="ml-auto h-4 w-4" />
              </DropdownMenuItem>

              {commonMenuItems}
            </DropdownMenuGroup>

            {additionalMenuGroups}
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />

              <span>Sair</span>
            </DropdownMenuItem>
          </>
        )

      case 'button':
        return (
          <>
            <DropdownMenuLabel className="font-normal">
              <p className="text-sm leading-none font-medium">{user.nome}</p>

              <p className="text-muted-foreground text-xs leading-none">
                {user.email}
              </p>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem onClick={onEditProfile}>
                <UserIcon className="mr-2 h-4 w-4" />

                <span>Profile</span>
              </DropdownMenuItem>

              {commonMenuItems}
            </DropdownMenuGroup>

            {additionalMenuGroups}
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />

              <span>Sair</span>
            </DropdownMenuItem>
          </>
        )

      case 'status':
        return (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm leading-none font-medium">
                    {user.nome}
                  </p>

                  {/* <span
                    className={cn(
                      'h-2 w-2 rounded-full',
                      user.status ? statusColors[user.status] : 'bg-gray-400',
                    )}
                  /> */}

                  {/* <span className="text-muted-foreground text-xs capitalize">
                    {user.status || 'offline'}
                  </span> */}
                </div>

                <p className="text-muted-foreground text-xs leading-none">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem onClick={onEditProfile}>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={''} alt={user.nome} />

                    <AvatarFallback className="select-none">
                      {getInitials(user.nome)}
                    </AvatarFallback>
                  </Avatar>

                  <span>Edit Profile</span>
                </div>

                <Pencil className="ml-auto h-4 w-4" />
              </DropdownMenuItem>

              {commonMenuItems}
            </DropdownMenuGroup>

            {additionalMenuGroups}
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />

              <span>Sair</span>
            </DropdownMenuItem>
          </>
        )
      default:
        return (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm leading-none font-medium">{user.nome}</p>

                <p className="text-muted-foreground text-xs leading-none">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              {/* <DropdownMenuItem onClick={onEditProfile}>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={''}
                      alt={user.name}
                    />

                    <AvatarFallback className="select-none">{getInitials(user.name)}</AvatarFallback>
                  </Avatar>

                  <span>Edit Profile</span>
                </div>

                <Pencil className="ml-auto h-4 w-4" />
              </DropdownMenuItem> */}

              {commonMenuItems}
            </DropdownMenuGroup>

            {additionalMenuGroups}
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />

              <span>Sair</span>
            </DropdownMenuItem>
          </>
        )
    }
  }

  const getDropdownWidth = () => {
    switch (variant) {
      case 'minimal':
        return 'w-48'
      case 'expanded':
        return 'w-64'
      default:
        return 'w-56'
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>{renderTrigger()}</DropdownMenuTrigger>

      <DropdownMenuContent
        className={cn(getDropdownWidth(), className)}
        align="end"
        forceMount
      >
        {renderContent()}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
