import express, { Express, Router } from 'express';
import { API_PORT, API_PREFIX_ROUTER } from '../modules/environment';
import http from 'http';
import cors from 'cors';

class Server {
  private serverExpress: Express;
  private PORT: number = API_PORT;
  serverHttp: http.Server;

  constructor (routers: Router[]) {
    this.serverExpress = express();
    this.serverExpress.use(express.json());
    this.serverExpress.use(cors());
    this.addRouters(routers);
    this.serverHttp = http.createServer(this.serverExpress);
    this.start();
  }

  private addRouters(routers: express.Router[]) {
    for (const router of routers) {
      this.serverExpress.use(API_PREFIX_ROUTER, router);
    }
  }

  private start() {
    this.serverHttp.listen(this.PORT, () => console.log(`servidor escutando na porta http://localhost:${this.PORT}/${API_PREFIX_ROUTER}`));
  }
}

export { Server };