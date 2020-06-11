import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    ShoppingCartComponent]
})
export class ShoppingCartModule { }
