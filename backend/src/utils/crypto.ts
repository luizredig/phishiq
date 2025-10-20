import {
  createCipheriv,
  createDecipheriv,
  createHmac,
  randomBytes,
} from 'crypto'

function getEncryptionKey(): Buffer {
  const raw = process.env.DATA_ENCRYPTION_KEY
  if (!raw) {
    throw new Error('DATA_ENCRYPTION_KEY não configurada')
  }
  let key: Buffer
  try {
    key = Buffer.from(raw, 'base64')
  } catch {
    key = Buffer.from([])
  }
  if (key.length !== 32) {
    try {
      key = Buffer.from(raw, 'hex')
    } catch {
      // noop
    }
  }
  if (key.length !== 32) {
    throw new Error('DATA_ENCRYPTION_KEY deve ter 32 bytes (base64 ou hex)')
  }
  return key
}

export function encryptText(plain: string | null | undefined): string {
  if (plain == null) return plain as unknown as string
  const key = getEncryptionKey()
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', key, iv)
  const ciphertext = Buffer.concat([
    cipher.update(plain, 'utf8'),
    cipher.final(),
  ])
  const tag = cipher.getAuthTag()
  const enc = [
    iv.toString('base64'),
    ciphertext.toString('base64'),
    tag.toString('base64'),
  ].join('.')
  return `enc:${enc}`
}

export function decryptText(maybeEncrypted: string | null | undefined): string {
  if (maybeEncrypted == null) return maybeEncrypted as unknown as string
  if (!maybeEncrypted.startsWith('enc:')) return maybeEncrypted
  const key = getEncryptionKey()
  const payload = maybeEncrypted.slice(4)
  const [ivB64, ctB64, tagB64] = payload.split('.')
  const iv = Buffer.from(ivB64, 'base64')
  const ciphertext = Buffer.from(ctB64, 'base64')
  const tag = Buffer.from(tagB64, 'base64')
  const decipher = createDecipheriv('aes-256-gcm', key, iv)
  decipher.setAuthTag(tag)
  const decrypted = Buffer.concat([
    decipher.update(ciphertext),
    decipher.final(),
  ])
  return decrypted.toString('utf8')
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}

function getEmailHashSecret(): string {
  const secret = process.env.EMAIL_HASH_SECRET
  if (!secret) {
    throw new Error('EMAIL_HASH_SECRET não configurado')
  }
  return secret
}

export function computeEmailSearch(email: string): string {
  const norm = normalizeEmail(email)
  const secret = getEmailHashSecret()
  return createHmac('sha256', secret).update(norm).digest('hex')
}
