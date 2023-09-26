import http from 'http';
import { Server, Socket } from 'socket.io';
import { EmitReturnOptions, EventData, Events, ReturnEvent } from './eventsTypes';

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
      console.log(socket.id, 'conectou');

      socket.on('disconnect', () => console.log('desconectou'));

      this.events.forEach((event) => {
        socket.on(event.name, (data: EventData) => {
          const result: EventData = event.callback(data);
          this.returnEvent(socket, event.returnEvent, result);
        });
      });
    });
  }

  private async returnEvent(socket: Socket, configReturn: ReturnEvent, data: EventData,) {
    try {
      switch (configReturn.emitReturn) {
        case EmitReturnOptions.EMIT_TO_ALL:
          this.socketIo.emit(configReturn.eventName, data);
          break;
        case EmitReturnOptions.EMIT_TO_ROOM:
          if (!data?.roomId) {
            console.error('Not the room for issuing results');
            return;
          }
          socket.to(data?.roomId).emit(configReturn.eventName, data);
          break;
        case EmitReturnOptions.EMIT_TO_SOCKET:
          socket.emit(configReturn.eventName, data);
          break;
      }

    } catch (e: any) {
      console.log(e.message);
    }
  }

}

export default WebSocketInstance;