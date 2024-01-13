import { MissingParamError } from '../src/presentation/errors'
import { Validation } from '../src/presentation/helpers/validators/validation'
import { ValidationComposite } from '../src/presentation/helpers/validators/validation-composite'

describe('Validation Composite', () => {
  test('Should return an error if any validation fails', () => {
    class ValidationStub implements Validation {
      validate (input: any): Error {
        return new MissingParamError('field')
      }
    }

    const validationStub = new ValidationStub()

    const sut = new ValidationComposite([validationStub])

    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
