import sqlite3 from 'sqlite3';

export enum MigrationType {
  CREATE = 'create',
  UPDATE = 'update',
  DROP = 'drop'
}

export enum openDBOption {
  SELECT = sqlite3.OPEN_READONLY,
  SELECT_INSERT = sqlite3.OPEN_READWRITE,
  CREATE = sqlite3.OPEN_CREATE
}

export interface Migration {
  name: string;
  type: MigrationType;
  comand: string;
}

export class SqliteDatabase extends sqlite3.Database {
  constructor (fileName: string) {
    const callbackInitializeDatabase = (err: Error | null) => {
      if (err) console.log(err.message, fileName);
      return;
    };
    super(fileName, callbackInitializeDatabase);
  }

  async executeMigrations(migrations: Migration[]) {
    for (const migration of migrations) {
      this.exec(migration.comand, (err) => {
        if (err) console.error(err.message);
      });
    }
  }

  closeDb() {
    this.close((err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}