import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindfarmRoutingModule } from './windfarm-routing.module';
import { WindfarmComponent } from './windfarm.component';


@NgModule({
  declarations: [
    WindfarmComponent
  ],
  imports: [
    CommonModule,
    WindfarmRoutingModule
  ]
})
export class WindfarmModule { }
