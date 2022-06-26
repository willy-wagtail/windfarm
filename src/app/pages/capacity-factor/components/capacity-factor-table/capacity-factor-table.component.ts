import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CapacityFactorTableRow } from '../../models/capacity-factor-table-row';

@Component({
  selector: 'app-capacity-factor-table',
  templateUrl: './capacity-factor-table.component.html',
  styleUrls: ['./capacity-factor-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CapacityFactorTableComponent implements OnInit {

  @Input() rows: CapacityFactorTableRow[] = [];

  readonly headings = [
    'Date', 
    'Electricity Produced',
    'Total Capacity',
    'Capacity Factor', 
    'Notes'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
