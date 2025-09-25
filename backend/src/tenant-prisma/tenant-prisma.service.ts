import {
  BadRequestException,
  Injectable,
  OnModuleDestroy,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '../../prisma/generated/schema';

@Injectable()
export class TenantPrismaService implements OnModuleDestroy {
  private clients = new Map<string, PrismaClient>();

  constructor(private readonly configService: ConfigService) {}

  async getClient(tenantId: string): Promise<PrismaClient> {
    if (!this.clients.has(tenantId)) {
      const user = this.configService.get<string>('database.user');
      const pass = encodeURIComponent(
        this.configService.get<string>('database.pass')!,
      );
      const host = this.configService.get<string>('database.host');
      const port = parseInt(
        this.configService.get<string>('database.port')!,
        10,
      );
      const prefix = this.configService.get<string>('database.namePrefix');
      const schema = this.configService.get<string>('database.schema');

      if (!user || !pass || !host || !port || !prefix || !schema) {
        throw new Error('Database configuration is invalid or incomplete.');
      }

      const dbName = `${prefix}${tenantId}`;
      const url = `postgresql://${user}:${pass}@${host}:${port}/${dbName}?schema=${schema}`;

      const client = new PrismaClient({
        datasources: { db: { url } },
      });

      try {
        await client
          .$queryRawUnsafe(
            `SELECT 1 FROM pg_database WHERE datname = '${dbName}'`,
          )
          .then((result: any) => {
            if (result.length === 0) {
              throw new Error();
            }
          });
      } catch (err) {
        await client.$disconnect();
        throw new BadRequestException('Invalid tenant');
      }

      this.clients.set(tenantId, client);
    }

    return this.clients.get(tenantId)!;
  }

  async onModuleDestroy() {
    for (const client of this.clients.values()) {
      await client.$disconnect();
    }
  }
}
