import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {
  items: ShoppingCartItem[];

  constructor(items: ShoppingCartItem[]) {
    this.items = items;
  }

  get productIds() {
    return Object.keys(this.items);
  }

  get totalQuantity(): string {
    let count = 0;
    for (const productId in this.items) {
      count += this.items[productId].quantity;
    }
    return count + '';
  }
}
