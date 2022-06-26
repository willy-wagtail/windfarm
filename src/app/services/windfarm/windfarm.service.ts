import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MeterReading, IndexedHourlyMeterReadings } from 'src/app/models/meter-reading';
import { HourOfDay } from 'src/app/models/datetime/time';
import { Windfarm } from 'src/app/models/windfarm';
import { WindfarmHttpService } from '../backend/windfarm-http.service';
import { DateService } from '../date/date.service';
import { ISODateString } from 'src/app/models/datetime/date';

@Injectable({
  providedIn: 'root'
})
export class WindfarmService {

  constructor(
    private windfarmHttpService: WindfarmHttpService,
    private dateService: DateService
  ) { }

  getAllWindfarms$(): Observable<Windfarm[]> {
    return this.windfarmHttpService.getAllWindfarms$();
  }

  getIndexedHourlyMeterReadings$(
    windfarm: Windfarm,
    fromDate: ISODateString,
    toDate: ISODateString
  ): Observable<IndexedHourlyMeterReadings> {

    return this.windfarmHttpService.getHourlyMeterReadings$(
      windfarm.id,
      fromDate,
      toDate
    ).pipe(
      map(this.toIndexedHourlyMeterReadings)
    );
  }

  private toIndexedHourlyMeterReadings(
    hourlyMeterReadings: MeterReading[]
  ): IndexedHourlyMeterReadings {
    let result: IndexedHourlyMeterReadings = {};

    hourlyMeterReadings.forEach(
      hmr => {
        const date: ISODateString = this.dateService.getISODate(hmr.timestamp);
        const hour: HourOfDay = this.dateService.getUTCHour(hmr.timestamp);

        result[date][hour] = hmr;
      }
    );

    return result;
  }

}
