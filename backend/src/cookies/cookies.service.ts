import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaClient, Action, Entity } from '../../prisma/generated/schema'
import { encryptText } from '../utils/crypto'

@Injectable()
export class CookiesService {
  constructor(@Inject('TENANT_PRISMA') private readonly prisma: PrismaClient) {}

  async getCurrentUserConsents(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { pseudonym: { include: { cookie_consents: true } } },
    })
    if (!user) throw new NotFoundException('Usuário não encontrado')
    const consents = user.pseudonym?.cookie_consents || []
    const toMap = consents.reduce<Record<string, boolean>>((acc, c) => {
      acc[c.category] = c.consented
      return acc
    }, {})
    try {
      await this.prisma.log.create({
        data: {
          entity: Entity.PSEUDONYM_COOKIE_CONSENT,
          entity_id: user.pseudonym?.id || userId,
          action: Action.READ,
          created_by: encryptText('system'),
        },
      })
    } catch {}
    return toMap
  }

  async saveCurrentUserConsents(
    userId: string,
    payload: {
      functional?: boolean
      analytics?: boolean
      advertising?: boolean
    },
  ) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { pseudonym: true },
    })
    if (!user) throw new NotFoundException('Usuário não encontrado')

    // Garante pseudônimo
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

    const categories: Array<{
      key: 'FUNCTIONAL' | 'ANALYTICS' | 'ADVERTISING'
      value: boolean | undefined
    }> = [
      { key: 'FUNCTIONAL', value: payload.functional },
      { key: 'ANALYTICS', value: payload.analytics },
      { key: 'ADVERTISING', value: payload.advertising },
    ]

    for (const { key, value } of categories) {
      if (typeof value === 'boolean') {
        await this.prisma.pseudonymCookieConsent.upsert({
          where: {
            pseudonym_id_category: {
              pseudonym_id: pseudonym.id,
              category: key,
            },
          },
          update: {
            consented: value,
            updated_by: 'system',
          },
          create: {
            pseudonym: { connect: { id: pseudonym.id } },
            category: key,
            consented: value,
            created_by: 'system',
            updated_by: 'system',
          },
        })
        try {
          await this.prisma.log.create({
            data: {
              entity: Entity.PSEUDONYM_COOKIE_CONSENT,
              entity_id: `${pseudonym.id}:${key}`,
              action: Action.UPDATE,
              created_by: encryptText('system'),
            },
          })
        } catch {}
      }
    }

    return { ok: true }
  }
}
