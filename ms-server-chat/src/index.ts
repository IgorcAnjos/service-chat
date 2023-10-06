import { Server } from './modules/Server';
import { SqliteDatabase } from './modules/Server/sqlite-database';
import WebSocketInstance from './modules/Server/web-socket';
import { migrationsList } from './server/db.migrations';
import { events } from './server/events';
import { routers } from './server/routers';

const server = new Server(routers);
const webSocketServer = new WebSocketInstance(server.serverHttp);
webSocketServer.addEvent(events);
webSocketServer.initSocket();

const sqliteDatabase = new SqliteDatabase('./data/database.db');

sqliteDatabase.executeMigrations(migrationsList);

server.start();

export { server, webSocketServer };
