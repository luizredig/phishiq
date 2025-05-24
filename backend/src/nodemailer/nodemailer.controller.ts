/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Post } from '@nestjs/common'
import { NodemailerService } from './nodemailer.service'

interface PhishingEmailData {
  nomeEmpresa: string
  urlLogoEmpresa: string
  nomeUsuario: string
  artigoEmpresa: string
  linkBotao: string
}

@Controller('nodemailer')
export class NodemailerController {
  constructor(private readonly nodemailerService: NodemailerService) {}

  @Post('phishing')
  async sendPhishingEmail(
    @Body()
    data: {
      to: string
      data: PhishingEmailData
    },
  ) {
    return this.nodemailerService.sendPhishingEmail(data.to, data.data)
  }
}
