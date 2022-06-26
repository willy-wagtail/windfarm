import { Component, OnInit } from '@angular/core';
import { Windfarm } from 'src/app/models/windfarm';
import { WindfarmService } from 'src/app/services/windfarm/windfarm.service';
import { CompletedWindfarmDateRangeForm } from '../../models/windfarm-date-range-form';

@Component({
  selector: 'app-capacity-factor',
  templateUrl: './capacity-factor.component.html',
  styleUrls: ['./capacity-factor.component.scss']
})
export class CapacityFactorComponent implements OnInit {

  windfarms: Windfarm[] = [];

  isLoading = true;

  constructor(private windfarmService: WindfarmService) { }

  ngOnInit(): void {
    this.loadWindfarms();
  }

  onFormChange(windfarmDateRangeForm: CompletedWindfarmDateRangeForm): void {
    console.log(windfarmDateRangeForm);
  }

  private loadWindfarms(): void {
    this.windfarmService
      .getAllWindfarms$()
      .subscribe(
        {
          next: wfs => {
            this.windfarms = wfs;
            this.isLoading = false;
          },
          error: e => {
            // todo: handle case when loading windfarms fails
            console.error(e);
            this.isLoading = false;
          },
        }
      );
  }
}
