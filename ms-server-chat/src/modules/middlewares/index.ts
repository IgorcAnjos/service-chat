import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { findContentLanguage, ContentLanguage } from './contentLanguages';
import { findTimeZone, TimeZone, defaultTimeZoneBR } from '../types/timeZone';
import { verify } from 'jsonwebtoken';

interface TokenData {
  userId?: string;
  password?: string;
  error?: string;
}

export interface Session {
  contentLanguage: ContentLanguage,
  timeZone: TimeZone;
  tokenData: TokenData | undefined;
}

class loginMiddleware {
  public sessinData: Session;

  constructor (req: Request, res: Response, next: NextFunction) {
  }

  handleLogin(req: Request, res: Response, next: NextFunction) {
    const Session = this.createSessionData(req);
    const loginData = this.getLoginData(req);
  }

  createSessionData(req: Request): Session {
    return {
      contentLanguage: findContentLanguage(req.headers['content-language']),
      timeZone: findTimeZone(req.headers['time-zone'])!,
      tokenData: undefined
    };
  }

  getLoginData(req: Request): TokenData | undefined {
    const result: TokenData = {};

    const headerAuthorization = req.headers.authorization || '';
    const token = headerAuthorization.replace('Bearer', '').trim();
    const data: any = verify(token, API_JWT_TOKEN || '');

    if (!token) {
      result.httpStatus = httpStatus.UNAUTHORIZED;
      result.httpMessage = 'Unauthorized';
      return result;
    }
  }
}
// export async function loginMidleware(req: Request, res: Response, next: NextFunction) {
//   try {
//     /* PUBLIC HEAD DATA */
//     if (!req.sessionData) {
//       req.sessionData = defaultSessionData;
//     }

//     req.sessionData.appOrigin = AppOrigin.eAppOriginOmnichannel;
//     req.sessionData.contentLanguage = publicData.contentLanguage;
//     req.sessionData.timeZone = publicData.timeZone;
//   } catch (err) {
//     console.log(err);
//   }
// }