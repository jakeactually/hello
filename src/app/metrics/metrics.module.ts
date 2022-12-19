import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetricsRoutingModule } from './metrics-routing.module';
import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MetricsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class MetricsModule { }
