import httpStatus from 'http-status';
import { Errors } from '..';

class BadRequest extends Errors {
  constructor (
    message: string
  ) {
    super(message, httpStatus.UNAUTHORIZED);
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}

export default BadRequest;