import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/product';
import { ShoppingCardService } from '../../core/services/shopping-card.service';

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

  constructor(private shoppingCardService: ShoppingCardService) {
  }

  addToCard(product: Product): void {
    this.shoppingCardService.addToCard(product);
  }

}
