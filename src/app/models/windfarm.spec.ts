import { isWindfarm, isWindfarmArray, Windfarm } from "./windfarm";

describe('Windfarm', () => {

    describe('isWindfarm type guard', () => {

        it('returns true if Windfarm object is correct', () => {
            let val: Windfarm = {
                id: 'abc',
                name: 'Windfarm A',
                totalCapacity: 55
            };

            expect(isWindfarm(val)).toBe(true);
        });

        it('returns false if Windfarm.id is incorrect', () => {
            let val: any = {
                id: 123, // purposely not a string
                name: 'Windfarm A',
                totalCapacity: 55
            };

            expect(isWindfarm(val)).toBe(false);
        });

        it('returns false if Windfarm.name is incorrect', () => {
            let val: any = {
                id: 'abc',
                name: 123, // purposely not a string
                totalCapacity: 55
            };

            expect(isWindfarm(val)).toBe(false);
        });

        it('returns false if Windfarm.totalCapacity is incorrect', () => {
            let val: any = {
                id: 'abc',
                name: 'Windfarm A',
                totalCapacity: '55' // purposely not a number
            };

            expect(isWindfarm(val)).toBe(false);
        });

        it('returns false if null', () => {
            expect(isWindfarm(null)).toBe(false);
        });

        it('returns false if undefined', () => {
            expect(isWindfarm(undefined)).toBe(false);
        });
    });

    describe('isWindfarmArray type guard', () => {
        it('returns false if not an array', () => {
            let val: any = 'Not an array'

            expect(isWindfarmArray(val)).toBe(false)
        });

        it('returns true if an array of Windfarm objects', () => {
            let val: Windfarm[] = [
                {
                    id: 'a',
                    name: 'Windfarm A',
                    totalCapacity: 55
                },
                {
                    id: 'b',
                    name: 'Windfarm B',
                    totalCapacity: 75
                }
            ];

            expect(isWindfarmArray(val)).toBe(true)
        });

        it('returns false if one item in array is not a Windfarm object', () => {
            let val: any[] = [
                {
                    id: 'a',
                    name: 'Windfarm A',
                    totalCapacity: 55
                },
                {
                    id: 'b',
                    name: 'Windfarm B',
                    totalCapacity: '75' // purposely not a number
                }
            ];

            expect(isWindfarmArray(val)).toBe(false)
        });
    });

});