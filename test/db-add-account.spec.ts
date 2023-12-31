import { DbAddAccount } from '../src/data/use-cases/add-account/db-add-account'

describe('DbAddAccount Usecase', () => {
  test('Should call Encrypter with correct password', async () => {
    class EncrypterStup {
      async encrypt (value: string): Promise<string> {
        return new Promise(resolve => resolve('hashed_password'))
      }
    }
    const encryptStub = new EncrypterStup()
    const sut = new DbAddAccount(encryptStub)
    const encryptSpy = jest.spyOn(encryptStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
