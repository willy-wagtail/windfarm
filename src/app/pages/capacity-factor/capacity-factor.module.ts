import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CapacityFactorRoutingModule } from './capacity-factor-routing.module';
import { CalendarIconComponent } from 'src/app/shared/icons/calendar-icon/calendar-icon.component';
import { WindfarmDateRangeFormComponent } from './components/windfarm-date-range-form/windfarm-date-range-form.component';
import { CapacityFactorComponent } from './components/capacity-factor/capacity-factor.component';
import { CapacityFactorTableComponent } from './components/capacity-factor-table/capacity-factor-table.component';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { ExclamationIconComponent } from 'src/app/shared/icons/exclamation-icon/exclamation-icon.component';
import { InfoIconComponent } from 'src/app/shared/icons/info-icon/info-icon.component';

@NgModule({
  declarations: [
    CapacityFactorComponent,
    WindfarmDateRangeFormComponent,
    CapacityFactorTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarIconComponent,
    ExclamationIconComponent,
    InfoIconComponent,
    SpinnerComponent,
    CapacityFactorRoutingModule
  ]
})
export class CapacityFactorModule { }
