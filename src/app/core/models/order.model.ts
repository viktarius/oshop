import { ShoppingCart } from './shopping-cart.model';

export class Order {
  datePlace: number;
  item: any[];

  constructor(private userId: string, public shipping: any, shoppingCart: ShoppingCart) {
    this.datePlace = new Date().getTime();
    this.item = shoppingCart.items.map(i => ({
      product: {
        title: i.title,
        imageUrl: i.imageUrl,
        price: i.price
      },
      quantity: i.quantity,
      totalPrice: i.totalPrice
    }));
  }

}
