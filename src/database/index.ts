import { createConnection, Connection } from 'typeorm'

import { config } from '../configs/database'

class DataBase {
  constructor () {
    this.connection()
  }

  async connection (): Promise<Connection> {
    return createConnection(config)
  }
}

export default new DataBase()
