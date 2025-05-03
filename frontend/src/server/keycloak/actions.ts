import axios from 'axios'
import api from '@/lib/axios'

export async function logoutFromKeycloak(realm: string, email: string) {
  if (!realm || !email) {
    throw new Error('Realm ou email do usuário não encontrados')
  }

  try {
    const response = await api.post('/keycloak/logout', {
      realm,
      email,
    })

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message
      throw new Error(`Erro ao fazer logout: ${message}`)
    }

    throw new Error('Erro inesperado ao fazer logout.')
  }
}
