import { makeSignUpValidation } from '../src//main/factories/signup-validation'
import { CompareFieldsValidation } from '../src/presentation/helpers/validators/compare-fields-validation'
import { RequiredFieldValidation } from '../src/presentation/helpers/validators/required-field-validation'
import { Validation } from '../src/presentation/helpers/validators/validation'
import { ValidationComposite } from '../src/presentation/helpers/validators/validation-composite'

jest.mock('../src/presentation/helpers/validators/validation-composite')
describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeSignUpValidation()

    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
