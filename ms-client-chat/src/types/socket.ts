export interface EventData {
  data: any;
  roomId?: string;
  error?: {
    code: number;
    message: string;
  };
}

export enum EmitReturnOptions {
  EMIT_TO_SOCKET = 'emit_to_socket',
  EMIT_TO_ALL = 'emit_to_all',
  EMIT_TO_ROOM = 'emit-to_room',
  DO_NOT_EMIT = 'do_not_emit',
}
export interface ReturnEvent {
  eventName: string,
  emitReturn: EmitReturnOptions,
  roomId?: string;
}

export interface Events {
  name: string;
  callback: (param: EventData) => EventData;
  returnEvent: ReturnEvent;
}