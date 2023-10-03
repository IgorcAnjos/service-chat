import httpStatus from 'http-status';

class Errors extends Error {
  public status: number;

  constructor (
    message: string,
    status: number = httpStatus.INTERNAL_SERVER_ERROR
  ) {
    super(message);
    this.status = status;

    Object.setPrototypeOf(this, Errors.prototype);
  }
}

export { Errors };