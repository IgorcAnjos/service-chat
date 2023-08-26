import { Server } from './modules/Server';
import { routers } from './server/routers';

const App = new Server(routers);
export { App };