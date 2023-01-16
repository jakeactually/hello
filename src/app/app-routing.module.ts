import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsRoutingModule } from './users/users-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [{
  path: 'users',
  loadComponent: () => import('./users/users.module').then(m => m.UsersModule)
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
