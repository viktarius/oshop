import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(itemsMap: { [key: string]: ShoppingCartItem }) {
    for (const productId in itemsMap) {
      const item = itemsMap[productId];
      this.items.push(new ShoppingCartItem(item.product, item.quantity));
    }
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
