import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../helpers/auth.guard';
import { FormComponent } from './form/form.component';

const routes: Routes = [{
  path: 'users',
  children: [
    {
      path: 'register',
      component: FormComponent,
      canActivate: [AuthGuard]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class MetricsRoutingModule { }
