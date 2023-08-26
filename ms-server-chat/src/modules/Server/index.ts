import express, { Express, Router } from 'express';
import { API_PORT, API_PREFIX_ROUTER } from './environmentServer';
import cors from 'cors';

class Server {
  public Server: Express;
  private PORT: number = API_PORT;
  constructor (routers: Router[]) {
    this.Server = express();
    this.Server.use(express.json());
    this.Server.use(cors());

    this.addRouters(routers);
    this.start();
  }

  private addRouters(routers: express.Router[]) {
    for (const router of routers) {
      this.Server.use(API_PREFIX_ROUTER, router);
    }
  }

  private start() {
    this.Server.listen(this.PORT, () => console.log(`servidor escutando na porta http://localhost:${this.PORT}/${API_PREFIX_ROUTER}`));
  }
}

export { Server };