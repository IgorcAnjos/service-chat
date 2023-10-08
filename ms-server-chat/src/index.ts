import { Server } from './modules/Server';
import { Database } from './modules/Server/sqlite-database';
import { ConfigDb } from './modules/Server/sqlite-database/types';

import WebSocketInstance from './modules/Server/web-socket';
import { migrationsList } from './server/db.migrations';
import { events } from './server/events';
import { routers } from './server/routers';

const server = new Server(routers);
const webSocketServer = new WebSocketInstance(server.serverHttp);
webSocketServer.addEvent(events);
webSocketServer.initSocket();

const configDb: ConfigDb = {
  fileName: './data/database.db',
  idConnection: 'AllMigrations'
};

const sqliteDatabase = new Database(configDb);

sqliteDatabase.executeMigrations(migrationsList);

server.start();

export { server, webSocketServer };
