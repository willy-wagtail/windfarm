import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WindfarmComponent } from './windfarm.component';

const routes: Routes = [{ path: '', component: WindfarmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindfarmRoutingModule { }
