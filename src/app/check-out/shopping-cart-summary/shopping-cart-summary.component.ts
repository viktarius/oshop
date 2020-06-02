import { Component, Input } from '@angular/core';
import { ShoppingCart } from '../../core/models/shopping-cart.model';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.scss']
})

export class ShoppingCartSummaryComponent {
  @Input()
  cart: ShoppingCart;
}
