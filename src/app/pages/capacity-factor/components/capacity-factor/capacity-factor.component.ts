import { Component, OnInit } from '@angular/core';
import { Windfarm } from 'src/app/models/windfarm';
import { CapacityFactorPageService } from 'src/app/services/ui/capacity-factor-page/capacity-factor-page.service';
import { CapacityFactorTableRow } from '../../models/capacity-factor-table-row';
import { CompletedWindfarmDateRangeForm, isEqual } from '../../models/windfarm-date-range-form';

@Component({
  selector: 'app-capacity-factor',
  templateUrl: './capacity-factor.component.html',
  styleUrls: ['./capacity-factor.component.scss']
})
export class CapacityFactorComponent implements OnInit {

  windfarms: Windfarm[] = [];
  rows: CapacityFactorTableRow[] = [];

  /** UI State */
  currentFilters: CompletedWindfarmDateRangeForm | null = null;
  loadingWindfarms = true;
  loadingRows = false;

  constructor(private cfPageService: CapacityFactorPageService) { }

  ngOnInit(): void {
    this.loadWindfarms();
  }

  onFormChange(form: CompletedWindfarmDateRangeForm): void {
    if (
      this.currentFilters === null
      || !isEqual(this.currentFilters, form)
    ) {
      this.currentFilters = form;

      this.loadCapacityFactorTableRow(form);
    }
  }

  private loadWindfarms(): void {
    this.loadingWindfarms = true;

    this.cfPageService
      .getAllWindfarms$()
      .subscribe(
        {
          next: wfs => {
            this.windfarms = wfs;
            this.loadingWindfarms = false;
          },
          error: e => {
            // todo: handle case when loading windfarms fails
            console.error(e);
            this.loadingWindfarms = false;
          },
        }
      );
  }

  private loadCapacityFactorTableRow(form: CompletedWindfarmDateRangeForm): void {
    if (this.windfarms.length === 0) {
      return;
    }

    const windfarm: Windfarm | undefined = this.windfarms.find(
      w => w.id === form.windfarmId
    );

    if (windfarm === undefined) {
      throw new Error(`Cannot find windfarm with id "${form.windfarmId}".`);
    }

    this.loadingRows = true;

    this.cfPageService
      .getCapacityFactorTableRows$(windfarm, form.startDate, form.endDate)
      .subscribe({
        next: rows => {
          this.rows = rows;
          this.loadingRows = false;
        },
        error: e => {
          // todo: handle case when loading windfarms fails
          console.error(e);
          this.loadingRows = false;
        }
      });
  }
}
