import { DateTime } from "luxon";
import { isMegawattHour, isMegawatts } from "./energy-units";
import { isMeterReading, isMeterReadingArray, MeterReading } from "./meter-reading";

describe('MeterReading', () => {

    describe('isMeterReading', () => {
        it('returns true if MeterReading object is correct', () => {
            let val: MeterReading = {
                timestamp: '2021-02-13T00:02:01.423Z',
                reading: 11
            };

            expect(isMeterReading(val)).toBe(true);
        });

        it('returns false if MeterReading.timestamp is incorrect', () => {
            let val: any = {
                timestamp: 'banana', // not an ISODateTimeString
                reading: 40
            };

            expect(isMeterReading(val)).toBe(false);
        });


        it('returns false if MeterReading.reading is incorrect', () => {
            let val: any = {
                timestamp: '2021-02-13T00:02:01.423Z',
                reading: null // not a MegawattHour
            };

            expect(isMeterReading(val)).toBe(false);
        });

        it('returns false if null', () => {
            expect(isMeterReading(null)).toBe(false);
        });

        it('returns false if undefined', () => {
            expect(isMeterReading(undefined)).toBe(false);
        });
    });

    describe('isMeterReadingArray', () => {
        it('returns false if not an array', () => {
            let val: any = 'Not an array'

            expect(isMeterReadingArray(val)).toBe(false)
        });

        it('returns true if an array of MeterReading objects', () => {
            let val: MeterReading[] = [
                {
                    timestamp: '2021-02-13T00:02:01.423Z',
                    reading: 11
                },
                {
                    timestamp: '2021-02-14T00:01:10.921Z',
                    reading: 16
                }
            ];

            expect(isMeterReadingArray(val)).toBe(true)
        });

        it('returns false if one item in array is not a MeterReading object', () => {
            let val: any[] = [
                {
                    timestamp: '2021-02-13T00:02:01.423Z',
                    reading: 11
                },
                {
                    timestamp: 'apples', // not an ISODateTimeString
                    reading: 11
                }
            ];

            expect(isMeterReadingArray(val)).toBe(false)
        });
    });
});