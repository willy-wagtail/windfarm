import { ISODateTimeString } from "./date";
import { MegawattsPerHour } from "./energy-units";

/** 
 * The Wind farm has a meter that reads the total 
 * amount of electricity produced per hour. 
 */

export interface MeterReading {
    readonly timestamp: ISODateTimeString;
    readonly reading: MegawattsPerHour;
}
