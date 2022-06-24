import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacityFactorComponent } from './components/capacity-factor.component';

const routes: Routes = [
  {
    path: '',
    component: CapacityFactorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapacityFactorRoutingModule { }
