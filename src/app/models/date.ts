import { DateTime } from "luxon";

/**  
 * ISO Date/Time Strings:
 * 
 * A string representing the given date (and time)
 * in the ISO 8601 format according to universal time.
 * 
 */

/** 
 * E.g. 2022-06-24 
 * 
 * TODO - Make regexp matched string type more accurate.
 */
export type ISODateString = `${number}-${number}-${number}`

/** 
 * E.g. 2022-06-24T17:39:43.155Z 
 * 
 * TODO- Replace generic string with regexp matched string type.
 */
export type ISODateTimeString = string;

export const isISODateString =
    (val: unknown): val is ISODateString => {
        return typeof val === 'string' &&
            DateTime.fromFormat(val, 'yyyy-mm-dd').isValid;
    };

export const isISODateTimeString =
    (val: unknown): val is ISODateString => {
        return typeof val === 'string' &&
            DateTime.fromISO(val).isValid &&
            !DateTime.fromFormat(val, 'yyyy-mm-dd').isValid;
    };