import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { QuantityButtonsComponent } from './quantity-buttons/quantity-buttons.component';

@NgModule({
  declarations: [
    OrdersComponent,
    HeaderComponent,
    ProductCartComponent,
    QuantityButtonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [
    OrdersComponent,
    HeaderComponent,
    ProductCartComponent,
    QuantityButtonsComponent
  ]
})
export class SharedModule {
}
