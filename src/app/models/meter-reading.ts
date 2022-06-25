import { isISODateTimeString, ISODateTimeString } from "./date";
import { isMegawattHour, MegawattHour } from "./energy-units";

/** 
 * The Wind farm has a meter that reads the 
 * total amount of electricity produced per hour. 
 */

export interface MeterReading {
    readonly timestamp: ISODateTimeString;
    readonly reading: MegawattHour;
}

export const isMeterReading =
    (val: any): val is MeterReading => {
        return !!val &&
            isISODateTimeString(val.timestamp) &&
            isMegawattHour(val.reading);
    };

export const isMeterReadingArray =
    (val: unknown): val is MeterReading[] => {
        if (
            Array.isArray(val) &&
            val.every((v) => isMeterReading(v))
        ) {
            return true;
        }

        return false;
    };
