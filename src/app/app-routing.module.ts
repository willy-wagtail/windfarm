import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'windfarm'
  },

  {
    path: '404',
    loadChildren:
      () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },

  {
    path: 'windfarm',
    loadChildren:
      () => import('./pages/windfarm/windfarm.module').then(m => m.WindfarmModule)
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
