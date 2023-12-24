import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-params-error'
import { InvalidEmailParamError } from '../errors/invalid-email-param'
import { badRequest, serverError } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const isValid = this.emailValidator.isValid(httpRequest.body.email)
      if (!isValid) {
        return badRequest(new InvalidEmailParamError('email'))
      }
    } catch (error) {
      return serverError()
    }
  }
}
