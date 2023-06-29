import 'dotenv/config'
import cors from '@fastify/cors'

import fastify from 'fastify'
import { privateRoutes } from './private'

const app = fastify()

app.register(cors, { origin: '*' })

app.register(privateRoutes)

app.listen({ port: 3333 }).then(() => console.log('run run  🏎🏎🏎'))
