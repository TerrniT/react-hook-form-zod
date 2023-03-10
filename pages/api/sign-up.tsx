/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { resolve } from 'path'

type Error = {
  [type: string]: string
}

type Data = {
  success: boolean
  errors?: unknown
}

//eslint-ignore
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body as Record<string, string>

  if (email === 'terrnit@gmail.com') {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    res.status(200).json({
      success: false,
      errors: {
        email: 'email no available',
      },
    })
    return
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))
  res.status(200).json({
    success: true,
  })
}
