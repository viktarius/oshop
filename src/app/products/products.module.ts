import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule
  ],
  exports: [
    ProductsComponent
  ]
})

export class ProductsModule { }
