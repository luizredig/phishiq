import { InjectQueue } from '@nestjs/bull'
import { Injectable } from '@nestjs/common'
import { Queue } from 'bull'

interface EnqueueOptions {
  batchSize?: number
  intervalMs?: number
  phishingId?: string
  subject?: string
  body?: string
}

@Injectable()
export class EmailProducerService {
  constructor(@InjectQueue('phishing-email') private readonly queue: Queue) {}

  async enqueueBatches(
    recipients: string[],
    options: EnqueueOptions = {},
  ): Promise<void> {
    const batchSize =
      options.batchSize ?? Number(process.env.BATCH_SIZE_DEFAULT ?? 5)
    const intervalMs =
      options.intervalMs ??
      Number(process.env.BATCH_INTERVAL_MS_DEFAULT ?? 30 * 60 * 1000)

    const chunks: string[][] = []
    for (let i = 0; i < recipients.length; i += batchSize) {
      chunks.push(recipients.slice(i, i + batchSize))
    }

    let delay = 0
    for (const chunk of chunks) {
      await this.queue.add(
        'send-batch',
        {
          recipients: chunk,
          phishingId: options.phishingId,
          subject: options.subject,
          body: options.body,
        },
        {
          delay,
          attempts: 3,
          backoff: { type: 'exponential', delay: 1000 },
          removeOnComplete: true,
          removeOnFail: false,
        },
      )
      delay += intervalMs
    }
  }
}
