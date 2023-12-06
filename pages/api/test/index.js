import dbConnect from '@/db/dbConnect';
import mongoose from "mongoose";
import test from '@/db/models/test';

export default async function handle (req, res) {
  await dbConnect();
  console.log(test)  

  switch(req.method) {
    case 'POST' :
      const newTest = await test.create(req.body);
      res.status(201).send(newTest);
      break;
    
    default :
      res.status(405).json({message : "Method Not Allowed"})
  }
}