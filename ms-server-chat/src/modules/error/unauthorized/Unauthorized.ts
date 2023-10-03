import httpStatus from 'http-status';
import { Errors } from '..';

class Unauthorized extends Errors {
  constructor (
    message: string
  ) {
    super(message, httpStatus.BAD_REQUEST);
    Object.setPrototypeOf(this, Unauthorized.prototype);
  }
}

export default Unauthorized;