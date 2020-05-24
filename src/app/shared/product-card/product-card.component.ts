import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/product';
import { ShoppingCartService } from '../../core/services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input()
  product: Product;

  @Input()
  actionItems?: boolean;

  @Input()
  shoppingCard: any;

  constructor(private shoppingCardService: ShoppingCartService) {
  }

  addToCard(): void {
    this.shoppingCardService.addToCard(this.product);
  }

  removeFromCard(): void {
    this.shoppingCardService.removeFromCard(this.product);
  }

  getQuantity() {
    if (!this.shoppingCard) {
      return 0;
    }
    const items = this.shoppingCard.items[this.product.$key];
    return items ? items.quantity : 0;
  }

}
