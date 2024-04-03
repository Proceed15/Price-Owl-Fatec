import { createConnection, Connection } from 'mysql2/promise';
import { databaseConfig } from '../config/database.config';

export class DatabaseService {
  private connection: Connection | null = null;

  constructor() {}

  private async getConnection(): Promise<Connection> {
    if (this.connection) {
      return this.connection;
    }
    this.connection = await createConnection(databaseConfig);
    return this.connection;
  }

  async connect(): Promise<void> {
    await this.getConnection();
    console.log('Conectado ao banco de dados!');
  }

  async disconnect(): Promise<void> {
    if (this.connection) {
      await this.connection.end();
      console.log('Desconectado do banco de dados!');
      this.connection = null;
    }
  }

  async query(sql: string, params?: any[]): Promise<any> {
    const connection = await this.getConnection();
    const [rows, fields] = await connection.execute(sql, params);
    return rows;
  }
}
