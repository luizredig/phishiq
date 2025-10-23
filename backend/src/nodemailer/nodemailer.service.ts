import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'

interface PhishingEmailData {
  userName: string
  link: string
  subject: string
  body: string
}

@Injectable()
export class NodemailerService {
  private transporter: nodemailer.Transporter

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get('SMTP_HOST'),
      port: this.configService.get('SMTP_PORT'),
      secure: this.configService.get('SMTP_SECURE') === 'true' ? true : false,
      auth: {
        user: this.configService.get('SMTP_USER'),
        pass: this.configService.get('SMTP_PASS'),
      },
    })
  }

  async sendEmail(options: {
    to: string | string[]
    subject: string
    html: string
    attachments?: Array<{
      filename: string
      content: Buffer | string
      contentType?: string
    }>
  }) {
    try {
      const mailOptions = {
        from: this.configService.get('SMTP_USER'),
        ...options,
      }

      const info = await this.transporter.sendMail(mailOptions)
      return info
    } catch (error) {
      throw new Error(`Failed to send email: ${error.message}`)
    }
  }

  async sendPhishingEmail(to: string, data: PhishingEmailData) {
    const bodyWithLink = `${data.body}\n\n${data.link}`
    return this.sendEmail({
      to,
      subject: data.subject,
      html: bodyWithLink,
    })
  }
}
