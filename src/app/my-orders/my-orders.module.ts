import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MyOrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MyOrdersComponent
  ]
})
export class MyOrdersModule { }
