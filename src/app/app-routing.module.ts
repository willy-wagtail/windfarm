import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'capacity-factor'
  },
  {
    path: '404',
    loadChildren:
      () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
  {
    path: 'capacity-factor',
    loadChildren:
      () => import('./pages/capacity-factor/capacity-factor.module')
        .then(m => m.CapacityFactorModule)
  },
  {
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
