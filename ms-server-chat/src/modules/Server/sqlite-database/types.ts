import sqlite3 from 'sqlite3';

export enum CommandType {
  CREATE = 'create',
  UPDATE = 'update',
  DROP = 'drop'
}

export enum ModeDbOptions {
  SELECT = sqlite3.OPEN_READONLY,
  SELECT_INSERT = sqlite3.OPEN_READWRITE,
  CREATE = sqlite3.OPEN_CREATE
}

export interface Migration {
  name: string;
  type: CommandType;
  comand: string;
}

export interface ConfigDb {
  fileName: string;
  mode?: ModeDbOptions;
  idConnection: string;
}
