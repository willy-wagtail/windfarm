import { DateTime } from "luxon";
import { MegawattsPerHour } from "./energy-units";

/** 
 * The Wind farm has a meter that reads the total 
 * amount of electricity produced per hour. 
 */

export interface MeterReading {
    readonly timestamp: DateTime;
    readonly reading: MegawattsPerHour;
}
