import { ISODateString } from "src/app/models/date";
import { Windfarm } from "src/app/models/windfarm";

export type WindfarmDateRangeForm
    = IncompleteWindfarmDateRangeForm
    | CompletedWindfarmDateRangeForm;

export interface CompletedWindfarmDateRangeForm {
    windfarm: Windfarm;
    startDate: ISODateString;
    endDate: ISODateString;
}

/**
 * The HTML element input[type=datepicker] can be an 
 * empty string if value is cancelled.
 */
export interface IncompleteWindfarmDateRangeForm {
    windfarm: Windfarm | null;
    startDate: ISODateString | '' | null;
    endDate: ISODateString | '' | null;
}

export const isCompletedForm =
    (form: WindfarmDateRangeForm): form is CompletedWindfarmDateRangeForm => {
        return form.windfarm !== null
            && form.startDate !== null
            && form.startDate !== ''
            && form.endDate !== null
            && form.endDate !== '';
    };