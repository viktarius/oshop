import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { OrdersComponent } from './orders/orders.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { QuantityButtonsComponent } from './quantity-buttons/quantity-buttons.component';

@NgModule({
  declarations: [
    OrdersComponent,
    ProductCartComponent,
    QuantityButtonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [
    OrdersComponent,
    ProductCartComponent,
    QuantityButtonsComponent
  ]
})
export class SharedModule {
}
