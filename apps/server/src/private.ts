import { FastifyInstance } from 'fastify'
import { clerkPlugin, getAuth, clerkClient } from '@clerk/fastify'

export async function privateRoutes(app: FastifyInstance) {
  app.register(clerkPlugin)

  app.get('/private', async (req, res) => {
    console.log('req', req.headers)
    const { userId } = getAuth(req)
    console.log('userId', userId)
    console.log(userId)

    if (!userId) {
      return res.status(403).send()
    }

    try {
      const user = await clerkClient.users.getUser(userId)
      console.log('user', user)
      res.status(200).send({ user })
    } catch (err) {
      console.log('err', err)
      res.status(500)
    }
  })
}
