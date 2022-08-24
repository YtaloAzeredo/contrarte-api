export abstract class Abstract {
  protected tableName: string

  constructor (tableName: string) {
    this.tableName = tableName
  }

  getNotFoundError () {
    return `${this.tableName} not found`
  }

  getConflictError () {
    return `${this.tableName} already exist`
  }

  getUpdateMessage () {
    return `${this.tableName} successfully updated`
  }

  getDeleteMessage () {
    return `${this.tableName} successfully deleted`
  }
}
