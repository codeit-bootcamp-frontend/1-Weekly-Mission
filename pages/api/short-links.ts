import { NextApiRequest, NextApiResponse } from "next";

interface ResponseData {
  message : string;
}

export default function handle (
  req : NextApiRequest,
  res : NextApiResponse
  ) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}