import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Windfarm } from 'src/app/models/windfarm';
import { WindfarmHttpService } from 'src/app/services/http/windfarm-http.service';
import { CompletedWindfarmDateRangeForm, WindfarmDateRangeForm } from '../../models/windfarm-date-range-form';

@Component({
  selector: 'app-capacity-factor',
  templateUrl: './capacity-factor.component.html',
  styleUrls: ['./capacity-factor.component.scss']
})
export class CapacityFactorComponent implements OnInit {

  windfarms: Windfarm[] = [];

  isLoading = true;

  constructor(private windfarmHttpService: WindfarmHttpService) { }

  ngOnInit(): void {
    this.windfarmHttpService
      .getAllWindfarms$()
      .pipe(
        tap()
      )
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
      )
  }
  onFormChange(windfarmDateRangeForm: CompletedWindfarmDateRangeForm): void {
    console.log(windfarmDateRangeForm);
  }
}
