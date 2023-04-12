import axios from "axios"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
  const {data} = await axios.get(req.body.url)
  res.status(200).json(data)
  }
  catch(e: any) {
  res.status(404).json(e.message)
  }
}