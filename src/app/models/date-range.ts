import { DateTime } from "luxon";

export interface DateRange {
    readonly startDate: DateTime;
    readonly endDate: DateTime;
}