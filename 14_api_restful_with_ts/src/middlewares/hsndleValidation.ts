import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }

  const extratectErros: object[] = []

  errors.array().map(error => extratectErros.push({[error.param]: error.msg}))
  return res.status(422).json({
    error: extratectErros
  })
}