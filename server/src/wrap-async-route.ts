import { Handler, Request, Response, NextFunction } from 'express'

export const wrapAsyncRoute = (handler: Handler): Handler =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise
      .resolve(handler(req, res, next))
      .catch(next)
