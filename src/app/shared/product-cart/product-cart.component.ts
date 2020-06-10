import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { ShoppingCartService } from '../../core/services/shopping-cart.service';
import { ShoppingCart } from '../../core/models/shopping-cart.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent {
  @Input()
  product: Product;

  @Input()
  actionItems?: boolean;

  @Input()
  shoppingCart: ShoppingCart;

  constructor(private shoppingCardService: ShoppingCartService) {
  }

  addToCard(): void {
    this.shoppingCardService.addToCard(this.product);
  }
}
