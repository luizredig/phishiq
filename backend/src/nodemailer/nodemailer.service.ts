/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as nodemailer from 'nodemailer'
import * as fs from 'fs'
import * as path from 'path'

interface PhishingEmailData {
  nomeEmpresa: string
  urlLogoEmpresa: string
  nomeUsuario: string
  linkBotao: string
}

@Injectable()
export class NodemailerService {
  private transporter: nodemailer.Transporter
  private phishingTemplate: string

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

    try {
      const srcTemplatePath = path.join(
        process.cwd(),
        'src',
        'templates',
        'phishing-1.html',
      )
      if (fs.existsSync(srcTemplatePath)) {
        this.phishingTemplate = fs.readFileSync(srcTemplatePath, 'utf-8')
        return
      }

      const distTemplatePath = path.join(
        process.cwd(),
        'dist',
        'templates',
        'phishing-1.html',
      )
      if (fs.existsSync(distTemplatePath)) {
        this.phishingTemplate = fs.readFileSync(distTemplatePath, 'utf-8')
        return
      }

      throw new Error(
        'Template file not found in either src or dist directories',
      )
    } catch (error) {
      console.error('Error loading template:', error)
      throw error
    }
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
        from: this.configService.get('SMTP_FROM'),
        ...options,
      }

      const info = await this.transporter.sendMail(mailOptions)
      return info
    } catch (error) {
      throw new Error(`Failed to send email: ${error.message}`)
    }
  }

  async sendPhishingEmail(to: string, data: PhishingEmailData) {
    let html = this.phishingTemplate

    html = html.replace(/\[NOME_EMPRESA\]/g, data.nomeEmpresa)
    html = html.replace(/\[URL_LOGO_EMPRESA\]/g, data.urlLogoEmpresa)
    html = html.replace(/\[NOME_USUARIO\]/g, data.nomeUsuario)
    html = html.replace(/\[LINK_BOTAO\]/g, data.linkBotao)

    return this.sendEmail({
      to,
      subject: `${data.nomeEmpresa} - Presente especial para você!`,
      html,
    })
  }
}
