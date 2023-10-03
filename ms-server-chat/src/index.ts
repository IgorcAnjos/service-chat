import { Server } from './modules/Server';
import WebSocketInstance from './modules/Server/webSocket';
import { events } from './server/events';
import { routers } from './server/routers';

const server = new Server(routers);
const webSocketServer = new WebSocketInstance(server.serverHttp);
webSocketServer.addEvent(events);
webSocketServer.initSocket();

server.start();

export { server, webSocketServer };
