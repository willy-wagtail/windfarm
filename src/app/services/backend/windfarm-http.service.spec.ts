import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WindfarmHttpService } from './windfarm-http.service';
import { getMockWindfarmArray } from '../../mocks/windfarm';
import { Windfarm, WindfarmId } from '../../models/windfarm';
import { MeterReading } from 'src/app/models/meter-reading';
import { getMockMeterReadingArray } from 'src/app/mocks/meter-reading';
import { ISODateString } from 'src/app/models/datetime/date';

describe('WindfarmHttpService', () => {

  let httpTestingController: HttpTestingController;

  let windfarmHttpService: WindfarmHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WindfarmHttpService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    windfarmHttpService = TestBed.inject(WindfarmHttpService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getAllWindfarms$', () => {

    let expectedURL: string;

    beforeEach(() => {
      expectedURL = 'api/windfarms'
    });

    it('makes an HTTP GET request to the correct URL', (done: DoneFn) => {
      const mockWindfarmArray: Windfarm[] = getMockWindfarmArray();

      windfarmHttpService
        .getAllWindfarms$()
        .subscribe(
          data => {
            expect(data).toEqual(mockWindfarmArray);
            done();
          }
        );

      const req = httpTestingController.expectOne(expectedURL);
      expect(req.request.method).toEqual('GET');
      req.flush(mockWindfarmArray);
      httpTestingController.verify();
    });

    it('throws error if response fails typeguard', (done: DoneFn) => {
      const mockWindfarmArray: any[] = getMockWindfarmArray();
      mockWindfarmArray[1].name = 123 // should be of type string

      windfarmHttpService
        .getAllWindfarms$()
        .subscribe(
          {
            next: _ => done.fail('Expected typeguard to throw exception'),
            error: e => {
              expect(e.message).toEqual('TypeGuard check failed.');
              done();
            }
          }
        );

      const req = httpTestingController.expectOne(expectedURL);
      expect(req.request.method).toEqual('GET');
      req.flush(mockWindfarmArray);
      httpTestingController.verify();
    });
  });

  describe('getHourlyMeterReadings$', () => {

    let windfarmId: WindfarmId;
    let fromDate: ISODateString;
    let toDate: ISODateString;

    let expectedURL: string;

    beforeEach(() => {
      windfarmId = 'abcdef';
      fromDate = '2021-02-20';
      toDate = '2021-02-21';

      expectedURL = `api/windfarms/${windfarmId}/readings?fromDate=${fromDate}&toDate=${toDate}`;
    });

    it('makes an HTTP GET request to the correct URL', (done: DoneFn) => {
      const mockMeterReadings: MeterReading[] = getMockMeterReadingArray();

      windfarmHttpService
        .getHourlyMeterReadings$(windfarmId, fromDate, toDate)
        .subscribe(
          data => {
            expect(data).toEqual(mockMeterReadings);
            done();
          }
        );

      const req = httpTestingController.expectOne(expectedURL);
      expect(req.request.method).toEqual('GET');
      req.flush(mockMeterReadings);
      httpTestingController.verify();
    });

    it('throws error if response fails typeguard', (done: DoneFn) => {
      const mockMeterReadings: any[] = getMockMeterReadingArray();
      mockMeterReadings[1].reading = 'Wrong Type'; // should be of type MegawattHour

      windfarmHttpService
        .getHourlyMeterReadings$(windfarmId, fromDate, toDate)
        .subscribe(
          {
            next: _ => done.fail('Expected typeguard to throw exception'),
            error: e => {
              expect(e.message).toEqual('TypeGuard check failed.');
              done();
            }
          }
        );

      const req = httpTestingController.expectOne(expectedURL);
      expect(req.request.method).toEqual('GET');
      req.flush(mockMeterReadings);
      httpTestingController.verify();
    });

  });
});
