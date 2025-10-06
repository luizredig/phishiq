import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Public } from './public.decorator'
import { z } from 'zod'

const SignupSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
  roles: z.array(z.string()).optional(),
})

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const RefreshSchema = z.object({
  refresh_token: z.string().min(1),
})

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('signup')
  @Public()
  async signup(@Body() body: unknown) {
    const data = SignupSchema.parse(body)
    return this.auth.signup(data)
  }

  @Post('login')
  @Public()
  async login(@Body() body: unknown) {
    const data = LoginSchema.parse(body)
    return this.auth.login(data.email, data.password)
  }

  @Post('refresh-token')
  @Public()
  async refresh(@Body() body: unknown) {
    const data = RefreshSchema.parse(body)
    return this.auth.refreshToken(data.refresh_token)
  }
}
