import {
  Controller,
  Get,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { BearerAuthGuard } from '../auth/bearer.guard';
import { Role } from './entities/role.enum';
import { Roles } from './roles.decorator';
import { UsersService } from './users.service';
import { LicensingGuard } from 'src/licensing/licensing.guard';
import { PoliciesGuard } from 'src/casl/policies.guard';

@Controller('users')
@UseGuards(BearerAuthGuard, LicensingGuard, PoliciesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles(Role.ADMIN)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(BearerAuthGuard)
  @Get('me')
  async me(@Req() req: Request) {
    if (!req['user']?.id) {
      throw new UnauthorizedException('Missing subject');
    }

    const user = await this.usersService.findById(req['user'].id);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return user;
  }
}
