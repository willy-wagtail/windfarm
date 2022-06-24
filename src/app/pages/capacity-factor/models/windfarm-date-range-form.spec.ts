import { getMockWindfarm_A } from "src/app/mocks/windfarm";
import { isCompletedForm, WindfarmDateRangeForm } from "./windfarm-date-range-form";

describe('WindfarmDateRangeForm', () => {

    describe('isCompletedForm', () => {

        it(
            'returns true if WindfarmDateRangeForm is CompletedWindfarmDateRangeForm',
            () => {
                const form: WindfarmDateRangeForm = {
                    windfarm: getMockWindfarm_A(),
                    startDate: '2022-01-01',
                    endDate: '2022-02-01'
                };

                expect(isCompletedForm(form)).toBe(true);
            }
        );

        it(
            'returns false if WindfarmDateRangeForm is IncompleteWindfarmDateRangeForm',
            () => {
                const form: WindfarmDateRangeForm = {
                    windfarm: getMockWindfarm_A(),
                    startDate: '',
                    endDate: '2022-02-01'
                };

                expect(isCompletedForm(form)).toBe(false);
            }
        );
    });
});