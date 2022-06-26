import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MeterReading, IndexedDailyHourlyMeterReadings, IndexedHourlyMeterReadings } from 'src/app/models/meter-reading';
import { HourOfDay } from 'src/app/models/datetime/time';
import { Windfarm } from 'src/app/models/windfarm';
import { WindfarmHttpService } from '../backend/windfarm-http.service';
import { DateService } from '../date/date.service';
import { ISODateString } from 'src/app/models/datetime/date';
import { MegawattHour, Megawatts } from 'src/app/models/energy-units';
import { CapacityFactor } from 'src/app/models/capacity-factor';

@Injectable({
  providedIn: 'root'
})
export class WindfarmService {

  constructor(
    private dateService: DateService,
    private windfarmHttpService: WindfarmHttpService,
  ) { }

  /** 
   * Note: There can be missing hourly meter readings. 
   */
  sumHourlyMeterReadings(
    hourlyMeterReadings: IndexedHourlyMeterReadings
  ): MegawattHour {
    return Object.values(hourlyMeterReadings)
      .map(r => r.reading)
      .reduce((partialSum, a) => partialSum + a, 0);
  }

  getDailyCapacityFactory(
    knownProduction: MegawattHour,
    capacity: Megawatts
  ): CapacityFactor | null {
    if(capacity === 0) {
      return null;
    }

    return knownProduction / (capacity * 24);
  }

  getAllWindfarms$(): Observable<Windfarm[]> {
    return this.windfarmHttpService.getAllWindfarms$();
  }

  getIndexedMeterReadings$(
    windfarm: Windfarm,
    fromDate: ISODateString,
    toDate: ISODateString
  ): Observable<IndexedDailyHourlyMeterReadings> {

    return this.windfarmHttpService.getHourlyMeterReadings$(
      windfarm.id,
      fromDate,
      toDate
    ).pipe(
      map(readings => this.toIndexedHourlyMeterReadings(readings))
    );
  }

  private toIndexedHourlyMeterReadings(
    hourlyMeterReadings: MeterReading[]
  ): IndexedDailyHourlyMeterReadings {
    let result: IndexedDailyHourlyMeterReadings = {};

    hourlyMeterReadings.forEach(
      hmr => {
        const date: ISODateString = this.dateService.getISODate(hmr.timestamp);
        const hour: HourOfDay = this.dateService.getUTCHour(hmr.timestamp);

        /** TODO - check and handle case with duplicate hourly meter readings. */
        if (result[date]) {
          result[date][hour] = hmr;
        } else {
          result[date] = { [`${hour}`]: hmr };
        }
      }
    );

    return result;
  }

}
