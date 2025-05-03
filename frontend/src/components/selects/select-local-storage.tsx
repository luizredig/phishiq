'use client'

import { useEffect, useState } from 'react'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { MultiSelect } from '@/components/ui/multi-select'

interface Option {
  label: string
  value: string
}

interface SelectLocalStorageProps {
  contextOptions: Option[]
  storageKey: string
  field: any
  label: string
  placeholder?: string
}

export function SelectLocalStorage({
  contextOptions,
  storageKey,
  field,
  label,
  placeholder = 'Selecione opções',
}: SelectLocalStorageProps) {
  const [options, setOptions] = useState<Option[]>([])

  useEffect(() => {
    if (contextOptions.length > 0) {
      setOptions(contextOptions)
    } else {
      const local = localStorage.getItem(storageKey)
      if (local) {
        try {
          const parsed = JSON.parse(local)
          if (Array.isArray(parsed)) {
            setOptions(
              parsed.map((item: any) => ({
                label: item.nome || item.label,
                value: item.id || item.value,
              })),
            )
          }
        } catch (error) {
          console.error(`Erro ao parsear ${storageKey}:`, error)
        }
      }
    }
  }, [contextOptions, storageKey])

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <MultiSelect
          options={options}
          defaultValue={field.value}
          onValueChange={field.onChange}
          placeholder={placeholder}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}
