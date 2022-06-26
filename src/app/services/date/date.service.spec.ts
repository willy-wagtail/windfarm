import { TestBed } from '@angular/core/testing';
import { ISODateString } from 'src/app/models/datetime/date';

import { DateService } from './date.service';

describe('DateService', () => {
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDatesBetween', () => {

    it('returns array of dates between two dates', () => {

      const from: ISODateString = '2022-01-30';
      const to: ISODateString = '2022-02-03';

      const expected: ISODateString[] = [
        '2022-01-30',
        '2022-01-31',
        '2022-02-01',
        '2022-02-02',
        '2022-02-03',
      ];

      expect(service.getDatesBetween(from, to)).toEqual(expected);
    });

  });

  describe('getISODate', () => {
    it('converts 2022-06-26T13:19:40.125Z to 2022-06-26', () => {
      expect(service.getISODate('2022-06-26T13:19:40.125Z')).toBe('2022-06-26');
    });

    it('throws on failure', () => {
      expect(
        () => service.getISODate('banana')
      )
        .toThrowError(
          'Unexpected issue converting "banana" to ISODateString.'
        );
    });

  });

  describe('getUTCHour', () => {
    it('returns 13 for 2022-06-26T13:19:40.125Z', () => {
      expect(service.getUTCHour('2022-06-26T13:19:40.125Z')).toBe(13);
    });


    it('throws on failure', () => {
      expect(
        () => service.getUTCHour('banana')
      )
        .toThrowError(
          'Unexpected issue getting hours from "banana".'
        );
    });
  });

});
