import { socket } from '@/app/socket'
import api from '@/lib/axios'
import type { Usuario, UsuarioFormData } from '@/types/usuario'

export function getUsuarios(): Promise<Usuario[]> {
  const realm = sessionStorage.getItem('realm')

  return new Promise((resolve, reject) => {
    socket
      .timeout(5000)
      .emit('getUsuarios', realm, (err: any, data: Usuario[]) => {
        if (err) return reject(new Error('Erro ou timeout no WebSocket'))
        localStorage.setItem('users', JSON.stringify(data))
        resolve(data)
      })
  })
}

export function getUsuarioById(id: string): Promise<Usuario> {
  return new Promise((resolve, reject) => {
    socket
      .timeout(5000)
      .emit('getUsuarioById', id, (err: any, data: Usuario) => {
        if (err) return reject(new Error('Erro ao buscar usuário por ID'))
        resolve(data)
      })
  })
}

export function criarUsuario(user: UsuarioFormData): Promise<Usuario> {
  return new Promise((resolve, reject) => {
    socket
      .timeout(5000)
      .emit('criarUsuario', user, (err: any, data: Usuario) => {
        if (err) return reject(new Error('Erro ao criar usuário'))
        resolve(data)
      })
  })
}

export function atualizarUsuario(user: Usuario): Promise<Usuario> {
  const realm = sessionStorage.getItem('realm')

  return new Promise((resolve, reject) => {
    if (!realm) {
      return reject(new Error('Realm não encontrado na sessão'))
    }

    const payload = {
      ...user,
      realm,
    }

    socket
      .timeout(5000)
      .emit('atualizarUsuario', payload, (err: any, data: Usuario) => {
        if (err) return reject(new Error('Erro ao atualizar usuário'))
        resolve(data)
      })
  })
}

export function toggleUsuarioStatus(
  id: string,
  ativo: boolean,
): Promise<Usuario> {
  const realm = sessionStorage.getItem('realm')

  return new Promise((resolve, reject) => {
    if (!realm) {
      return reject(new Error('Realm não encontrado'))
    }

    socket
      .timeout(5000)
      .emit(
        'toggleUsuarioStatus',
        { id, ativo, realm },
        (err: any, data: Usuario) => {
          if (err) return reject(new Error('Erro ao alterar status'))
          resolve(data)
        },
      )
  })
}

export async function buscarEmail(email: string): Promise<boolean> {
  const response = await api.post('/keycloak/verify-email', {
    email,
  })

  return response.data.exists
}

export async function buscarEmailEmRealm(
  realm: string,
  email: string,
): Promise<boolean> {
  const response = await api.post('/keycloak/verify-email-realm', {
    realm,
    email,
  })

  return response.data.exists
}
