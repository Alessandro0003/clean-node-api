import { makeSignUpValidation } from '../src/main/factories/signup/signup-validation'
import { CompareFieldsValidation } from '../src/presentation/helpers/validators/compare-fields-validation'
import { EmailValidation } from '../src/presentation/helpers/validators/email-validation'
import { RequiredFieldValidation } from '../src/presentation/helpers/validators/required-field-validation'
import { Validation } from '../src/presentation/protocols/validation'
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
describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeSignUpValidation()

    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
    validations.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
