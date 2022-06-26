import { Injectable } from '@angular/core';
import { isISODateString, ISODateString, ISODateTimeString } from 'src/app/models/datetime/date';
import { HourOfDay, isHourOfDay } from 'src/app/models/datetime/time';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDatesBetween(
    from: ISODateString,
    to: ISODateString
  ): ISODateTimeString[] {
    const fromDate: Date = new Date(from);
    const toDate: Date = new Date(to);
    const result = [];

    let currentDate: Date = fromDate;

    while (currentDate <= toDate) {
      result.push(
        this.getISODate(currentDate.toISOString())
      );

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return result;
  }

  getISODate(dateTime: ISODateTimeString): ISODateString {
    const result = dateTime.split('T')[0];

    if (isISODateString(result)) {
      return result;
    } else {
      throw new Error(`Unexpected issue converting "${dateTime}" to ISODateString.`);
    }
  }

  getUTCHour(dateTime: ISODateTimeString): HourOfDay {
    const result = new Date(dateTime).getUTCHours();

    if(isHourOfDay(result)){
      return result;
    } else {
      throw new Error(`Unexpected issue getting hours from "${dateTime}".`);
    }
  }
}
