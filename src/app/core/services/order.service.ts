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

  getAll() {
    return this.db.list<any>('/orders').valueChanges();
  }

  getAllByUser(userId: string) {
    return this.db.list<any>('/orders', ref => ref.orderByChild('userId').equalTo(userId)).valueChanges();
  }

  async placeOrder(order) {
    const result = await this.db.list('/orders').push(order);
    this.shoppingCardService.clearCart();
    return result;
  }
}
