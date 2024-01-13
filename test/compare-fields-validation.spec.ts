import { InvalidEmailParamError } from '../src/presentation/errors'
import { CompareFieldsValidation } from '../src/presentation/helpers/validators/compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('field', 'fieldToCompare')
}
describe('CompareFields Validation', () => {
  test('Should return a InvalidEmailParamError if validation fails', () => {
    const sut = makeSut()

    const error = sut.validate({ field: 'any_value', fieldToCompare: 'wrong_value' })
    expect(error).toEqual(new InvalidEmailParamError('fieldToCompare'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()

    const error = sut.validate({ field: 'any_value', fieldToCompare: 'any_value' })
    expect(error).toBeFalsy()
  })
})
