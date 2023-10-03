import { Events, EmitReturnOptions, EventData } from '../modules/Server/webSocket/eventsTypes';

export const events: Events[] = [
  {
    name: 'click',
    callback: (param: EventData) => {
      console.log('executei a função do "click"');
      console.log(param.data);
      const result: EventData = {
        data: {
          count: param.data.count + 1,
        }
      };

      return result;
    },
    returnEvent: {
      emitReturn: EmitReturnOptions.EMIT_TO_ALL,
      eventName: 'click',
    }
  }
];
