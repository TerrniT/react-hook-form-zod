import * as z from 'zod'

export const SignupSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6).max(24),
    confirmPassword: z.string().min(6).max(24),
  })
  .refine(
    (form) => {
      return form.confirmPassword === form.password
    },
    {
      message: 'Passwords must match',
      path: ['confirmPassword'],
    }
  )
