export default class ConflictError extends Error {
  public statusCode: number
  public message: string
  public name: string

  constructor (message: string = 'Conflict') {
    super(message)
    this.statusCode = 409
    this.message = message
    this.name = 'ConflictError'
  }
}
