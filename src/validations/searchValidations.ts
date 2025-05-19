import { z } from 'zod'

const MIN_SEARCH_LENGTH = 4
const MAX_SEARCH_LENGTH = 55

export const searchSchema = z.object({
  searchTerm: z.string()
    .min(MIN_SEARCH_LENGTH, {
      message: `O termo de busca deve ter pelo menos ${MIN_SEARCH_LENGTH} caracteres`
    })
    .max(MAX_SEARCH_LENGTH, {
      message: `O termo de busca não pode ter mais de ${MAX_SEARCH_LENGTH} caracteres`
    })
    .trim()
    .transform((val) => val.replace(/\s+/g, ' ')) // Remove espaços extras
    .refine(
      (val) => val.length > 0,
      {
        message: 'O termo de busca não pode estar vazio'
      }
    )
    .refine(
      (val) => /^[a-zA-ZÀ-ÿ\s]*$/.test(val),
      {
        message: 'Apenas letras e espaços são permitidos'
      }
    )
    .refine(
      (val) => !/^\s*$/.test(val),
      {
        message: 'O termo de busca não pode conter apenas espaços'
      }
    )
    .refine(
      (val) => !/^[A-ZÀ-ÿ\s]*$/.test(val) || !/^[a-zà-ÿ\s]*$/.test(val),
      {
        message: 'O termo de busca deve conter pelo menos uma letra maiúscula e uma minúscula'
      }
    )
})

export type SearchFormData = z.infer<typeof searchSchema>

export const validateSearchTerm = (term: string) => {
  try {
    const result = searchSchema.parse({ searchTerm: term })
    return { isValid: true, data: result, error: null }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { isValid: false, data: null, error: error.errors[0].message }
    }
    return { isValid: false, data: null, error: 'Erro de validação desconhecido' }
  }
}
