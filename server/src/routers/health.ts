import express from 'express'
import { wrapAsyncRoute } from '../wrap-async-route'

const app = express()

app.get('/health', wrapAsyncRoute(getHealth))

function getHealth(_req: express.Request, res: express.Response) {
  const health = {
    version: '1.0.0',
  }

  res.status(200).send(health)
}

export default app
