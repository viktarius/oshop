import { ShoppingCartItem } from './shopping-cart-item.model';
import { Product } from './product';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: { [key: string]: ShoppingCartItem }) {
    this.itemsMap = this.itemsMap || {};
    for (const productId in itemsMap) {
      const item = itemsMap[productId];
      const x = new ShoppingCartItem();
      Object.assign(x, item);
      x.$key = productId;
      this.items.push(x);
    }
  }

  get productIds() {
    return Object.keys(this.items);
  }

  getQuantity(product: Product) {
    const items = this.itemsMap[product.$key];
    return items ? items.quantity : 0;
  }

  get totalQuantity(): string {
    let count = 0;
    for (const productId in this.items) {
      count += this.items[productId].quantity;
    }
    return count + '';
  }
}
