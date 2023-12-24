export class InvalidEmailParamError extends Error {
  constructor (paramName: string) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidEmailParamError'
  }
}
