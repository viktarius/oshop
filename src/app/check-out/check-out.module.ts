import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { CheckOutComponent } from './check-out.component';
import { CheckOutFormComponent } from './check-out-form/check-out-form.component';
import { CheckOutSummaryComponent } from './check-out-summary/check-out-summary.component';

@NgModule({
  declarations: [
    CheckOutComponent,
    CheckOutFormComponent,
    CheckOutSummaryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    CheckOutComponent,
    CheckOutFormComponent,
    CheckOutSummaryComponent
  ]
})
export class CheckOutModule { }
