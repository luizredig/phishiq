import { Process, Processor } from '@nestjs/bull'
import { Job } from 'bull'
import { Injectable, Logger } from '@nestjs/common'
import { NodemailerService } from '../nodemailer/nodemailer.service'

interface SendBatchPayload {
  recipients: string[]
  phishingId?: string
  subject?: string
  body?: string
}

@Processor('phishing-email')
@Injectable()
export class EmailProcessor {
  private readonly logger = new Logger(EmailProcessor.name)

  constructor(private readonly mailer: NodemailerService) {}

  @Process('send-batch')
  async handleSendBatch(job: Job<SendBatchPayload>): Promise<void> {
    const { recipients, phishingId, subject, body } = job.data

    for (const to of recipients) {
      // Execução sequencial para evitar picos no provedor SMTP e facilitar backpressure.
      // Caso queira paralelizar, usar algo como: await Promise.all(recipients.map(to => this.mailer.sendPhishingEmail(...)))
      await this.mailer.sendPhishingEmail(to, {
        userName: '',
        link: `${process.env.FRONTEND_URL}/phishing/${phishingId ?? ''}`,
        subject: subject ?? 'Simulação de Phishing',
        body: body ?? 'Você recebeu uma simulação de phishing.',
      })
    }

    this.logger.log(`Batch processado com ${recipients.length} destinatários`)
  }
}
