import { Controller, HttpRequest } from '../../presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      statusCode: function (statusCode: 200): unknown {
        throw new Error('Function not implemented.')
      }
    }

    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
