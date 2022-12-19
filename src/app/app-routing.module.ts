import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsRoutingModule } from './metrics/metrics-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [{
  path: 'metrics',
  loadComponent: () => import('./metrics/metrics.module').then(m => m.MetricsModule)
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MetricsRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
