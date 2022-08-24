export default class NotFoundError extends Error {
  public statusCode: number
  public message: string
  public name: string

  constructor (message: string = 'Not found') {
    super(message)
    this.statusCode = 404
    this.message = message
    this.name = 'NotFoundError'
  }
}
