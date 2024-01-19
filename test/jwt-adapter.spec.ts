import jwt from 'jsonwebtoken'
import { JwtAdapter } from '../src/infra/criptography/jwt/jwt-adapter'
describe('Jwt Adapter', () => {
  test('Should call sign with corrects values', async () => {
    const sut = new JwtAdapter('secret')
    const signSpy = jest.spyOn(jwt, 'sign')
    await sut.encrypt('any_id')
    expect(signSpy).toHaveBeenCalledWith({ id: 'any_id' }, 'secret')
  })
})
