import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacity-factor-table',
  templateUrl: './capacity-factor-table.component.html',
  styleUrls: ['./capacity-factor-table.component.scss']
})
export class CapacityFactorTableComponent implements OnInit {

  readonly headings = [
    'Date', 
    'Capacity Factor', 
    'Total Capacity',
    'Avg. Meter Reading',
    'Notes'
  ];

  data = [
    {
      date: '2021-10-10',
      capacityFactor: 0.8,
      averageMeterReading: 10.9,
      totalCapacity: 55,
      missingMeterReadings: 2
    },
    {
      date: '2021-10-11',
      capacityFactor: 0.56,
      averageMeterReading: 34.9,
      totalCapacity: 55,
      missingMeterReadings: 0
    },
    {
      date: '2021-10-12',
      capacityFactor: 0.29,
      averageMeterReading: 49.8,
      totalCapacity: 55,
      missingMeterReadings: 4
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
