import { makeLoginValidation } from '../src/main/factories/login/login-validation'
import { EmailValidation } from '../src/presentation/helpers/validators/email-validation'
import { RequiredFieldValidation } from '../src/presentation/helpers/validators/required-field-validation'
import { Validation } from '../src/presentation/helpers/validators/validation'
import { ValidationComposite } from '../src/presentation/helpers/validators/validation-composite'
import { EmailValidator } from '../src/presentation/protocols/email-validator'

jest.mock('../src/presentation/helpers/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}
describe('LoginValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeLoginValidation()

    const validations: Validation[] = []
    for (const field of ['email', 'password']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
