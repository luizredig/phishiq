import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/schema';

@Injectable()
export class UsersService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  async findAll(page?: number, perPage?: number) {
    const take = Math.max(1, Number(perPage) || 10);
    const skip = Math.max(0, ((Number(page) || 1) - 1) * take);
    const [data, total] = await Promise.all([
      this.prisma.user.findMany({ skip, take }),
      this.prisma.user.count(),
    ]);
    return { data, total, page: Number(page) || 1, perPage: take };
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
