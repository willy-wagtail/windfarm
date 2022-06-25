import { isMegawattHour, isMegawatts } from "./energy-units";

describe('Energy Units', () => {

    describe('isMegawatts', () => {
        it('returns true if number', () => {
            expect(isMegawatts(55)).toBe(true);
        });

        it('returns false if not a number', () => {
            expect(isMegawatts('19')).toBe(false);
        });
    });

    describe('isMegawattHour', () => {
        it('returns true if number', () => {
            expect(isMegawattHour(55)).toBe(true);
        });

        it('returns false if not a number', () => {
            expect(isMegawattHour('19')).toBe(false);
        });
    });
});