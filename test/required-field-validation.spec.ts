import { MissingParamError } from '../src/presentation/errors'
import { RequiredFieldValidation } from '../src/presentation/helpers/validators/required-field-validation'

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('field')

    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = new RequiredFieldValidation('field')

    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
