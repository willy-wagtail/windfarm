import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { isISODateString, ISODateString } from 'src/app/models/datetime/date';
import { HourOfDay } from 'src/app/models/datetime/time';
import { IndexedDailyHourlyMeterReadings } from 'src/app/models/meter-reading';
import { Windfarm } from 'src/app/models/windfarm';
import { CapacityFactorTableRow } from 'src/app/pages/capacity-factor/models/capacity-factor-table-row';
import { WindfarmService } from '../../windfarm/windfarm.service';

@Injectable({
  providedIn: 'root'
})
export class CapacityFactorPageService {

  constructor(
    private windfarmService: WindfarmService
  ) { }

  getAllWindfarms$(): Observable<Windfarm[]> {
    return this.windfarmService.getAllWindfarms$();
  }

  getCapacityFactorTableRows$(
    windfarm: Windfarm,
    startDate: ISODateString,
    endDate: ISODateString
  ): Observable<CapacityFactorTableRow[]> {

    return this.windfarmService.getIndexedMeterReadings$(
      windfarm,
      startDate,
      endDate
    ).pipe(
      map(i => this.toCapacityFactorTableRows(windfarm, i))
    );
  }

  private toCapacityFactorTableRows(
    windfarm: Windfarm,
    indexedMeterReadings: IndexedDailyHourlyMeterReadings
  ): CapacityFactorTableRow[] {
    const rows = Object
      .keys(indexedMeterReadings)
      .filter(isISODateString)
      .map(
        date => {
          const knownProduction = this.windfarmService.sumHourlyMeterReadings(
            indexedMeterReadings[date]
          );

          const capacityFactor = this.windfarmService.getDailyCapacityFactory(
            knownProduction,
            windfarm.totalCapacity
          );

          const numberOfReadings
            = Object.values(indexedMeterReadings[date]).length;

          return {
            capacity: windfarm.totalCapacity,
            missingHourlyMeterReadings: (24 - numberOfReadings) as HourOfDay,
            capacityFactor,
            date,
            knownProduction,
          };
        }
      );

    return rows;
  }
}
