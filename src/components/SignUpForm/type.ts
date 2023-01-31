import { SignupSchema } from '@/src/schemas'
import * as z from 'zod'

export type SignUpFormValues = z.infer<typeof SignupSchema>
export type KeyValues = 'email' | 'password' | 'confirmPassword'

export interface SignUpApi {
  setErrors: (errors: Record<string, string>) => void
}
