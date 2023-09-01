import { Events } from '../modules/Server/webSocket/WebSocketInstance';

export const events: Events[] = [
  {
    name: 'click',
    callback: (param) => {
      console.log(param);
      return { data: param, type: 'type' };
    },
    EmitReturn: true
  }
];
