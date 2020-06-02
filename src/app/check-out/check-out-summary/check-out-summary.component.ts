import { Component, Input } from '@angular/core';
import { ShoppingCart } from '../../core/models/shopping-cart.model';

@Component({
  selector: 'check-out-summary',
  templateUrl: './check-out-summary.component.html',
  styleUrls: ['./check-out-summary.component.scss']
})

export class CheckOutSummaryComponent {
  @Input()
  cart: ShoppingCart;
}
