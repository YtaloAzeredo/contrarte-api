export interface IRepository {
  getNotFoundError(): string
  getConflictError(): string
  getUpdateMessage(): string
  getDeleteMessage(): string
}
