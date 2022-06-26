import { CapacityFactor } from "src/app/models/capacity-factor";
import { ISODateString } from "src/app/models/datetime/date";
import { HourOfDay } from "src/app/models/datetime/time";
import { Megawatts } from "src/app/models/energy-units";

export interface CapacityFactorTableRow {
    date: ISODateString;
    capacity: Megawatts;
    knownProduction: Megawatts;
    capacityFactor: CapacityFactor | null;
    missingHourlyMeterReadings: HourOfDay;
}
