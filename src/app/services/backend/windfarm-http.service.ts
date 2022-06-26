import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { ISODateString } from 'src/app/models/datetime/date';
import { isMeterReadingArray, MeterReading } from 'src/app/models/meter-reading';
import { Windfarm, isWindfarmArray, WindfarmId } from '../../models/windfarm';
import { checkTypeGuard } from '../../util/check-type-guard';

@Injectable({
  providedIn: 'root'
})
export class WindfarmHttpService {

  private readonly WINDFARMS_URL = 'api/windfarms'

  constructor(private http: HttpClient) { }

  getAllWindfarms$(): Observable<Windfarm[]> {
    return this.http
      .get<Windfarm[]>(this.WINDFARMS_URL)
      .pipe(
        tap(val => checkTypeGuard(val, isWindfarmArray))
      );
  }

  getHourlyMeterReadings$(
    windfarmId: WindfarmId,
    fromDate: ISODateString,
    toDate: ISODateString
  ): Observable<MeterReading[]> {

    const options = {
      params: new HttpParams()
        .set('fromDate', fromDate)
        .set('toDate', toDate)
    };

    return this.http
      .get<MeterReading[]>(
        this.getMeterReadingsUrl(windfarmId),
        options
      )
      .pipe(
        tap(val => checkTypeGuard(val, isMeterReadingArray))
      );
  }

  private getMeterReadingsUrl(windfarmId: WindfarmId): string {
    return this.WINDFARMS_URL + '/' + windfarmId + '/readings';
  }
}
