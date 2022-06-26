import { isISODateTimeString, ISODateTimeString } from "./datetime/date";
import { isMegawattHour, MegawattHour } from "./energy-units";
import { HourOfDay } from "./datetime/time";

/** 
 * The Wind farm has a meter that reads the 
 * total amount of electricity produced per hour. 
 */

export interface MeterReading {
    readonly timestamp: ISODateTimeString;
    readonly reading: MegawattHour;
}

/**
 * Index MeterReading.timestamp
 * by date and hour for quicker access.
 */
export type IndexedHourlyMeterReadings = {
    [key in ISODateTimeString]: {
        [key in HourOfDay]: MeterReading;
    }
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
