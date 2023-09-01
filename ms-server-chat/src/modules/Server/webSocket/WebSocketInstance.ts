import http from 'http';
import { Server } from 'socket.io';

export interface DataEvents {
  data: any;
  type: string;
  message?: string;
  error?: {
    code: number;
    message: string;
  };
}

export interface Events {
  name: string;
  callback: (param: any) => DataEvents;
  EmitReturn: boolean;
}

class WebSocketInstance {
  socketIo: Server;
  events: Events[] = [];
  constructor (
    server: http.Server
  ) {
    this.socketIo = new Server(server,
      {
        cors: {
          origin: '*'
        }
      }
    );
  }

  addEvent(eventList: Events[]) {
    eventList.forEach(event => this.events.push(event));
  }

  initSocket() {
    this.socketIo.on('connection', (socket) => {

      this.events.forEach((event) => {
        socket.on(event.name, (data) => {
          const returnCallback = event.callback(data);

          if (event.EmitReturn) {
            socket.emit(event.name, returnCallback);
          }
        });
      });
    });
  }

}

export default WebSocketInstance;