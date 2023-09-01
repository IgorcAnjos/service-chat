import Unauthorized from '../error/unauthorized/Unauthorized';
import { UnauthorizedMessages } from '../error/unauthorized/unauthorizedMessages';

interface TimeZone {
  timeZone: string,
  timeZoneNumber: number,
  timeZoneGMZ: string;
}

const defaultTimeZoneBR: TimeZone = {
  timeZone: 'America/Sao_Paulo',
  timeZoneNumber: -3,
  timeZoneGMZ: '-03:00'
};

const findTimeZone = (value: any) => {
  if (
    (value === defaultTimeZoneBR.timeZone) ||
    (value === defaultTimeZoneBR.timeZoneGMZ) ||
    (value == defaultTimeZoneBR.timeZoneNumber)
  ) {
    return defaultTimeZoneBR;
  }
  throw new Unauthorized(UnauthorizedMessages.TIME_ZONE_NOT_ALLOWED);
};

export { findTimeZone, TimeZone, defaultTimeZoneBR };