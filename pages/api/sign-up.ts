/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";

type Error = {
  [type: string]: string;
};

type Data = {
  success: boolean;
  errors?: Error;
};

//eslint-ignore
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email, password } = req.body as Record<string, string>;

  console.log("POST /sign-up", req.body, { email, password });

  if (email === "terrnit@gmail.com") {
    await new Promise((resolver) => setTimeout(resolve, 1000));

    //todo

    res.status(200).json({
      success: false,
      errors: {
        email: "email no available",
      },
    });
  }

  await new Promise((resolver) => setTimeout(resolve, 1000));
  res.status(200).json({
    success: true,
  });
};
