/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import * as jwksRsa from 'jwks-rsa'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      algorithms: ['RS256'],
      secretOrKeyProvider: (req, rawJwtToken, done) => {
        try {
          const decoded: any = JSON.parse(
            Buffer.from(rawJwtToken.split('.')[1], 'base64').toString(),
          )
          const issuer = decoded.iss
          const kid = JSON.parse(
            Buffer.from(rawJwtToken.split('.')[0], 'base64').toString(),
          ).kid

          const client = jwksRsa({
            jwksUri: `${issuer}/protocol/openid-connect/certs`,
          })

          client
            .getSigningKey(kid)
            .then((key) => {
              const publicKey = key.getPublicKey()
              done(null, publicKey)
            })
            .catch((error) => {
              done(error, undefined)
            })
        } catch (error) {
          done(error, undefined)
        }
      },
    })
  }

  public validate(payload: any) {
    return payload
  }
}
