import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CapacityFactorRoutingModule } from './capacity-factor-routing.module';
import { CalendarIconComponent } from 'src/app/shared/icons/calendar-icon/calendar-icon.component';
import { WindfarmDateRangeFormComponent } from './components/windfarm-date-range-form/windfarm-date-range-form.component';
import { CapacityFactorComponent } from './components/capacity-factor/capacity-factor.component';

@NgModule({
  declarations: [
    CapacityFactorComponent,
    WindfarmDateRangeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarIconComponent,
    CapacityFactorRoutingModule
  ]
})
export class CapacityFactorModule { }
