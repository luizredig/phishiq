import axios from 'axios'
import api from '../lib/axios'

type SignupData = {
  email: string
  companyName: string
  password: string
}

export async function enviarCadastro(data: SignupData) {
  try {
    const response = await api.post('/keycloak/signup', {
      name: data.companyName,
      email: data.email,
      senha: data.password,
    })

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message
      throw new Error(`Erro ao cadastrar: ${message}`)
    }

    throw new Error('Erro inesperado ao cadastrar.')
  }
}
