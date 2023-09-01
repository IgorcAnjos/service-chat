import { NextFunction, Request } from 'express';
import { findTimeZone, TimeZone } from '../types/timeZone';
import { verify } from 'jsonwebtoken';
import { API_JWT_TOKEN } from '../environment';
import Unauthorized from '../error/unauthorized/Unauthorized';
import { UnauthorizedMessages } from '../error/unauthorized/unauthorizedMessages';

interface TokenData {
  userId?: string;
  createTokenDateTime?: string;
}

export interface Session {
  timeZone: TimeZone;
  tokenData: TokenData;
}

class LoginMiddleware {
  public sessinData: Session;

  constructor (req: Request, next: NextFunction) {
    this.sessinData = this.handleLogin(req);
    next();
  }

  handleLogin(req: Request) {
    const session: Session = {
      timeZone: findTimeZone(req.headers['time-zone']),
      tokenData: this.getLoginData(req)
    };
    return session;
  }

  getLoginData(req: Request): TokenData {
    const result: TokenData = {};

    const headerAuthorization = req.headers.authorization ?? '';
    const token = headerAuthorization.replace('Bearer', '').trim();

    if (!token) {
      throw new Unauthorized(UnauthorizedMessages.TOKEN_NOT_FOUND);
    }

    const data: any = verify(token, API_JWT_TOKEN);

    result.createTokenDateTime = data.createTokenDateTime;
    result.userId = data.userId;

    // Definir o período em que o token é funcional

    return result;
  }
}

export { LoginMiddleware };