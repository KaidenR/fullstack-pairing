import express from 'express'
import { wrapAsyncRoute } from '../wrap-async-route'

const app = express()

app.get('/status', wrapAsyncRoute(getStatus))

function getStatus(_req: express.Request, res: express.Response) {
  const status = {
    version: '1.0.0',
  }

  res.status(200).send(status)
}

export default app
