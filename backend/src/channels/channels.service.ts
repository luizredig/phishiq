import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaClient } from '../../prisma/generated/schema'

@Injectable()
export class ChannelsService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  async getChannelConsents(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { pseudonym: { include: { channel_consents: true } } },
    })
    if (!user) throw new NotFoundException('Usuário não encontrado')
    const consents = user.pseudonym?.channel_consents || []
    return consents.reduce<Record<string, boolean>>((acc, c) => {
      acc[c.channel] = c.consented
      return acc
    }, {})
  }

  async saveChannelConsents(
    userId: string,
    payload: Partial<Record<'EMAIL', boolean>>,
  ) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { pseudonym: true },
    })
    if (!user) throw new NotFoundException('Usuário não encontrado')

    const pseudonym = user.pseudonym
      ? user.pseudonym
      : await this.prisma.pseudonym.create({
          data: {
            pseudonym: `p-${userId}`,
            user: { connect: { id: userId } },
            created_by: 'system',
            updated_by: 'system',
          },
        })

    const entries = Object.entries(payload) as Array<
      ['EMAIL', boolean | undefined]
    >
    for (const [key, value] of entries) {
      if (typeof value === 'boolean') {
        await this.prisma.pseudonymChannelConsent.upsert({
          where: {
            pseudonym_id_channel: {
              pseudonym_id: pseudonym.id,
              channel: key,
            },
          },
          update: { consented: value, updated_by: 'system' },
          create: {
            pseudonym: { connect: { id: pseudonym.id } },
            channel: key,
            consented: value,
            created_by: 'system',
            updated_by: 'system',
          },
        })
      }
    }
    return { ok: true }
  }
}
