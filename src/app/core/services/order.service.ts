import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private db: AngularFireDatabase,
              private shoppingCardService: ShoppingCartService) {
  }

  async placeOrder(order) {
    const result = await this.db.list('/orders').push(order);
    this.shoppingCardService.clearCart();
    return result;
  }
}
