import { Global, Module } from '@nestjs/common'
import { PrismaMasterService } from './prisma-master.service'

@Global()
@Module({
  providers: [PrismaMasterService],
  exports: [PrismaMasterService],
})
export class PrismaMasterModule {}
