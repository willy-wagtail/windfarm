import { isHourOfDay } from "./time";

describe('Time', () => {

    describe('isHourOfDay', () => {
        it('returns true if 0', () => {
            expect(isHourOfDay(0)).toBe(true);
        });

        it('returns true if 23', () => {
            expect(isHourOfDay(23)).toBe(true);
        });

        it('returns false if -1', () => {
            expect(isHourOfDay(-1)).toBe(false);
        });

        it('returns false if 24', () => {
            expect(isHourOfDay(24)).toBe(false);
        });

        it('returns false if not a number', () => {
            expect(isHourOfDay('not a number')).toBe(false);
        });
    });
});
