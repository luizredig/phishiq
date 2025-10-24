import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { getQueueToken } from '@nestjs/bull'
import { ExpressAdapter } from '@bull-board/express'
import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })

  // Bull Board em /admin/queues
  const serverAdapter = new ExpressAdapter()
  serverAdapter.setBasePath('/admin/queues')
  const phishingQueue = app.get(getQueueToken('phishing-email'))
  createBullBoard({
    queues: [new BullAdapter(phishingQueue)],
    serverAdapter,
  })
  app.use('/admin/queues', serverAdapter.getRouter())

  await app.listen(process.env.PORT!, '0.0.0.0')
}
bootstrap()
