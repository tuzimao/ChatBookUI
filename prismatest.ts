import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function prismaExample() {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: 'Roy',
        email: 'roy@gmail.com',
        image: 'handsome.jpg'
      }
    })
    console.log(newUser)
    const users = await prisma.user.findMany()
    console.log(users) // This line will print the results to the console
  } catch (error) {
    console.error('Error in Prisma operation:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}
