import { isISODateString, isISODateTimeString } from "./date";

describe('Date', () => {
    describe('isISODateString', () => {
        it('returns true if ISO date string', () => {
            expect(isISODateString('2021-01-02')).toBe(true);
        });

        it('returns false if ISO datetime string', () => {
            expect(isISODateString('2022-06-25T17:14:47.840Z')).toBe(false);
        });

        it('returns false if not a string', () => {
            expect(isISODateString(2021)).toBe(false);
        });
    });

    describe('isISODateTimeString', () => {
        it('returns true if ISO datetime string', () => {
            expect(isISODateTimeString('2022-06-25T17:14:47.840Z')).toBe(true);
        });

        it('returns false if ISO date string', () => {
            expect(isISODateTimeString('2022-06-25')).toBe(false);
        });

        it('returns false if not a string', () => {
            expect(isISODateTimeString(2021)).toBe(false);
        });
    });
});
