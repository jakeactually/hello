import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsRoutingModule } from './metrics/metrics-routing.module';

const routes: Routes = [{
  path: 'caracol',
  loadComponent: () => import('./metrics/metrics.module').then(m => m.MetricsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), MetricsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
