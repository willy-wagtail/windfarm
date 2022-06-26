import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { getMockMeterReadingArray } from 'src/app/mocks/meter-reading';
import { getMockWindfarmArray, getMockWindfarm_A } from 'src/app/mocks/windfarm';
import { ISODateString } from 'src/app/models/datetime/date';
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


});
