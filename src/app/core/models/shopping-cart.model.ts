import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {

  constructor(items: ShoppingCartItem[]) {
    this.items = items;
  }

  items: ShoppingCartItem[];

  get totalQuantity(): string {
    let count = 0;
    for (const productId in this.items) {
      count += this.items[productId].quantity;
    }
    return count + '';
  }
}
