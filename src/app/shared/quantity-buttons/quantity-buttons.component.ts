import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { ShoppingCartService } from '../../core/services/shopping-cart.service';
import { ShoppingCart } from '../../core/models/shopping-cart.model';

@Component({
  selector: 'quantity-buttons',
  templateUrl: './quantity-buttons.component.html',
  styleUrls: ['./quantity-buttons.component.scss']
})
export class QuantityButtonsComponent {
  @Input()
  product: Product;

  @Input()
  shoppingCart: ShoppingCart;

  constructor(private shoppingCardService: ShoppingCartService) {
  }

  addToCard(): void {
    this.shoppingCardService.addToCard(this.product);
  }

  removeFromCard(): void {
    this.shoppingCardService.removeFromCard(this.product);
  }
}
