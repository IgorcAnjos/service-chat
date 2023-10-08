import sqlite3 from 'sqlite3';
import { ConfigDb, Migration, ModeDbOptions, } from './types';

export class Database extends sqlite3.Database {
  errorConnection = false;
  constructor (configDb: ConfigDb) {
    const initConnectCallback = (idConnection: string) => {
      const errorMessage = (err: Error) => `[${idConnection}] | Não foi possível inicializar a conexão com o banco de dados: ${err.message}`;
      const successMessage = `[${idConnection}] | Conexão criada com sucesso.`;
      const callback = (err: Error | null) => {
        if (err) {
          console.error(errorMessage(err));
          return;
        }
        console.info(successMessage);
      };

      return callback;
    };

    if (configDb.mode) configDb.mode = ModeDbOptions.SELECT_INSERT;

    super(configDb.fileName, configDb.mode, initConnectCallback(configDb.idConnection));
  }

  async executeMigrations(migrations: Migration[]) {
    for (const migration of migrations) {
      this.exec(migration.comand, (err) => {
        if (err) console.error(err.message);
      });
    }
  }

  private closeDb() {
    this.close((err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}