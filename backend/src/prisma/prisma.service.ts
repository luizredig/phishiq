/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common'
import { Prisma, PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(options?: Prisma.PrismaClientOptions) {
    super(options)
  }
}
