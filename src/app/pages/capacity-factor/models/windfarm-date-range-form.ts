import { isISODateString, ISODateString } from "src/app/models/datetime/date";
import { isWindfarmId, WindfarmId } from "src/app/models/windfarm";

export type WindfarmDateRangeForm
    = IncompleteWindfarmDateRangeForm
    | CompletedWindfarmDateRangeForm;

export interface CompletedWindfarmDateRangeForm {
    windfarmId: WindfarmId;
    startDate: ISODateString;
    endDate: ISODateString;
}

/**
 * The HTML element input[type=datepicker] can be an empty
 * string if value is deleted by pressing the 'x' button.
 */
export interface IncompleteWindfarmDateRangeForm {
    windfarmId: WindfarmId | null;
    startDate: ISODateString | '' | null;
    endDate: ISODateString | '' | null;
}

export const isEqual =
    (
        first: CompletedWindfarmDateRangeForm,
        second: CompletedWindfarmDateRangeForm
    ): boolean => {
        return first.windfarmId === second.windfarmId
            && first.startDate === second.startDate
            && first.endDate === second.endDate;
    };

export const isWindfarmDateRangeForm =
    (val: any): val is WindfarmDateRangeForm => {
        return typeof val === 'object'
            && (val.windfarmId === null || isWindfarmId(val.windfarmId))
            && (val.startDate === '' || val.startDate === null || isISODateString(val.startDate))
            && (val.endDate === '' || val.endDate === null || isISODateString(val.endDate));
    };

export const isCompletedForm =
    (form: WindfarmDateRangeForm): form is CompletedWindfarmDateRangeForm => {
        return form.windfarmId !== null
            && form.startDate !== null
            && form.startDate !== ''
            && form.endDate !== null
            && form.endDate !== '';
    };
