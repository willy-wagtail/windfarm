import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapacityFactorRoutingModule } from './capacity-factor-routing.module';
import { CapacityFactorComponent } from './components/capacity-factor.component';
import { CalendarIconComponent } from 'src/app/shared/icons/calendar-icon/calendar-icon.component';

@NgModule({
  declarations: [
    CapacityFactorComponent
  ],
  imports: [
    CommonModule,
    CalendarIconComponent,
    CapacityFactorRoutingModule
  ]
})
export class CapacityFactorModule { }
