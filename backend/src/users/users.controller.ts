import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { AuthGuard } from '@nestjs/passport'
import { z } from 'zod'
import { Request } from 'express'

const CreateUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  roles: z.array(z.string()).optional(),
})

const UpdateUserSchema = z.object({
  name: z.string().min(1).optional(),
  roles: z.array(z.string()).optional(),
  is_active: z.boolean().optional(),
})

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Get()
  list(@Query('includeInactive') includeInactive?: string) {
    return this.users.findAll(includeInactive === 'true')
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.users.findOne(id)
  }

  @Post()
  create(@Body() body: unknown, @Req() req: Request) {
    console.log('POST /users called')
    const data = CreateUserSchema.parse(body)
    const user = req.user as any
    const tenantId =
      (user && user.tenant_id) || (req.headers['x-tenant-id'] as string)

    console.log('UsersController.create payload', {
      name: data.name,
      email: data.email,
      hasRoles: Array.isArray((data as any).roles),
      tenantIdPresent: Boolean(tenantId),
      createdBy: user?.id || 'system',
    })

    return this.users.create(data, {
      tenantId,
      createdBy: user?.id || 'system',
    })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: unknown, @Req() req: Request) {
    const data = UpdateUserSchema.parse(body)
    const user = req.user as any
    return this.users.update(id, data, { updatedBy: user?.id || 'system' })
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('is_active') is_active: boolean) {
    return this.users.updateStatus(id, is_active)
  }
}
