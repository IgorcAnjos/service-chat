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
};

export { findTimeZone, TimeZone, defaultTimeZoneBR };