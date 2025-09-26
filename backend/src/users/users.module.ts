import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TenantMiddleware } from 'src/middlewares/tenant.middleware';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { KeycloakStrategy } from 'src/auth/strategies/keycloak.strategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService, KeycloakStrategy],
  exports: [UsersService],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantMiddleware).forRoutes(UsersController);
  }
}
