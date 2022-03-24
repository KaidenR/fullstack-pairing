import cors from 'cors'
import express from 'express'

import apiRouter from './routers'

const SERVER_PORT = 3001

const app = express()

app.use(cors({ origin: '*' }))
app.use('/api', apiRouter)

app.listen(SERVER_PORT, () => {
  console.log(`Running server on port ${SERVER_PORT}.`)
})
