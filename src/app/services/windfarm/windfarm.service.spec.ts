import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { getMockMeterReadingArray } from 'src/app/mocks/meter-reading';
import { getMockWindfarmArray, getMockWindfarm_A } from 'src/app/mocks/windfarm';
import { ISODateString } from 'src/app/models/datetime/date';
import { IndexedDailyHourlyMeterReadings } from 'src/app/models/meter-reading';
import { WindfarmHttpService } from '../backend/windfarm-http.service';
import { DateService } from '../date/date.service';

import { WindfarmService } from './windfarm.service';

describe('WindfarmService', () => {

    const dateServiceSpy = jasmine.createSpyObj(
        'DateService',
        ['getISODate', 'getUTCHour']
    );

    const windfarmHttpServiceSpy = jasmine.createSpyObj(
        'WindfarmHttpService',
        ['getAllWindfarms$', 'getHourlyMeterReadings$']
    );

    let windfarmService: WindfarmService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                WindfarmService,
                {
                    provide: DateService,
                    useValue: dateServiceSpy
                },
                {
                    provide: WindfarmHttpService,
                    useValue: windfarmHttpServiceSpy
                }
            ]
        });

        windfarmService = TestBed.inject(WindfarmService);
    });

    it('should be created', () => {
        expect(windfarmService).toBeTruthy();
    });

    describe('getAllWindfarms$', () => {

        it('calls WindfarmHttpService.getAllWindfarms$', (done: DoneFn) => {

            const mockWindfarms = getMockWindfarmArray();

            windfarmHttpServiceSpy
                .getAllWindfarms$
                .and
                .returnValue(
                    of(mockWindfarms)
                );

            windfarmService
                .getAllWindfarms$()
                .subscribe({
                    next: w => {

                        expect(w).toEqual(mockWindfarms);

                        expect(
                            windfarmHttpServiceSpy
                                .getAllWindfarms$
                                .calls
                                .count()
                        ).withContext(
                            'WindfarmHttpService.getAllWindfarms$ was called once'
                        ).toBe(1);

                        done();
                    }
                });

        });

    });

    describe('getIndexedMeterReadings$', () => {

        it(
            'returns IndexedDailyHourlyMeterReadings from MeterReadings from HTTP call',
            (done: DoneFn) => {
                const fromDate: ISODateString = '2022-06-25';
                const toDate: ISODateString = '2022-06-26';

                const mockWindfarm = getMockWindfarm_A();
                const mockMeterReadings = getMockMeterReadingArray();

                const expected: IndexedDailyHourlyMeterReadings = {
                    "2022-06-25": {
                        "17": { "timestamp": "2022-06-25T17:01:30.490Z", "reading": 8 }
                    },
                    "2022-06-26": {
                        "13": { "timestamp": "2022-06-26T13:01:30.490Z", "reading": 15 }
                    }
                };

                dateServiceSpy
                    .getUTCHour
                    .and
                    .returnValues(
                        17, 13
                    );

                dateServiceSpy
                    .getISODate
                    .and
                    .returnValues(
                        '2022-06-25', '2022-06-26'
                    );

                windfarmHttpServiceSpy
                    .getHourlyMeterReadings$
                    .and
                    .returnValue(
                        of(mockMeterReadings)
                    );

                windfarmService
                    .getIndexedMeterReadings$(
                        mockWindfarm,
                        fromDate,
                        toDate
                    )
                    .subscribe({
                        next: w => {
                            expect(
                                windfarmHttpServiceSpy
                                    .getHourlyMeterReadings$
                                    .calls
                                    .count()
                            ).withContext(
                                'WindfarmHttpService.getHourlyMeterReadings$ was called once'
                            ).toBe(1);

                            expect(
                                windfarmHttpServiceSpy.getHourlyMeterReadings$
                            ).toHaveBeenCalledWith(
                                mockWindfarm.id,
                                fromDate,
                                toDate
                            );

                            expect(w).toEqual(expected);

                            done();
                        }
                    });
            });
    });
});
