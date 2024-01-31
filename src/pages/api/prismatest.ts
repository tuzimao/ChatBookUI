// @ts-ignore
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

// import { PrismaPg } from '@prisma/adapter-pg'
// import { Pool } from 'pg'

// const connectionString = `${process.env.POSTGRES_URL}`
//const pool = new Pool({ connectionString })
//const adapter = new PrismaPg(pool)
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const newUser = await prisma.user.create({
        data: {
          name: 'Roy',
          email: 'roy@gmail.com',
          image: 'handsome.jpg'
        }
      })
      res.status(200).json(newUser)
    } catch (error) {
      console.error('Error in Prisma operation:', error)
      res.status(500).json({ error: 'Error in Prisma operation' })
    }
  } else if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany()
      res.status(200).json(users)
    } catch (error) {
      console.error('Error in Prisma operation:', error)
      res.status(500).json({ error: 'Error in retrieving users' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
