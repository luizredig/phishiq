import { socket } from '@/app/socket'
import type { Departamento, DepartamentoFormData } from '@/types/departamento'

export function getDepartamentos(): Promise<Departamento[]> {
  const realm = sessionStorage.getItem('realm')

  return new Promise((resolve, reject) => {
    socket
      .timeout(5000)
      .emit('getDepartamentos', realm, (err: any, data: Departamento[]) => {
        if (err) return reject(new Error('Erro ou timeout no WebSocket'))
        localStorage.setItem('departamentos', JSON.stringify(data))
        resolve(data)
      })
  })
}

export function criarDepartamento(
  departamento: DepartamentoFormData,
): Promise<Departamento> {
  const realm = sessionStorage.getItem('realm')

  const payload = {
    ...departamento,
    realm,
  }

  return new Promise((resolve, reject) => {
    socket
      .timeout(5000)
      .emit('criarDepartamento', payload, (err: any, data: Departamento) => {
        if (err) return reject(new Error('Erro ao criar departamento'))
        resolve(data)
      })
  })
}

export function atualizarDepartamento(
  departamento: Departamento,
): Promise<Departamento> {
  const realm = sessionStorage.getItem('realm')

  return new Promise((resolve, reject) => {
    if (!realm) {
      return reject(new Error('Realm não encontrado na sessão'))
    }

    const payload = {
      ...departamento,
      realm,
    }

    socket
      .timeout(5000)
      .emit(
        'atualizarDepartamento',
        payload,
        (err: Error | null, data: Departamento) => {
          if (err) return reject(new Error('Erro ao atualizar usuário'))
          resolve(data)
        },
      )
  })
}

export function getDepartamentoById(id: string): Promise<Departamento> {
  return new Promise((resolve, reject) => {
    socket
      .timeout(5000)
      .emit('getDepartamentoById', id, (err: any, data: Departamento) => {
        if (err) return reject(new Error('Erro ao buscar usuário por ID'))
        resolve(data)
      })
  })
}

export function toggleDepartamentoStatus(
  id: string,
  ativo: boolean,
): Promise<Departamento> {
  return new Promise((resolve, reject) => {
    const payload = {
      id,
      ativo,
    }

    socket
      .timeout(5000)
      .emit(
        'toggleDepartamentoStatus',
        payload,
        (err: any, data: Departamento) => {
          if (err) return reject(new Error('Erro ao alterar status'))
          resolve(data)
        },
      )
  })
}
