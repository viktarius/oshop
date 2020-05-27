import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from '../models/product';
import { ShoppingCart } from '../models/shopping-cart.model';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) {
  }

  async getCart() {
    const cartId = await this.getOrCreateCardId();
    return this.db.object<any>('/shopping-carts/' + cartId).valueChanges()
      .pipe(
        map(x => new ShoppingCart(x.items))
      );
  }

  async clearCart() {
    const cartId = await this.getOrCreateCardId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  async addToCard(product: Product) {
    this.updateItem(product, +1);
  }

  async removeFromCard(product: Product) {
    this.updateItem(product, -1);
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCardId(): Promise<string> {
    const cardId = localStorage.getItem('cardId');
    if (!cardId) {
      const result = await this.create();
      localStorage.setItem('cardId', result.key);
      return result.key;
    }
    return cardId;
  }

  private getItem(cardId: string, productId: string) {
    return this.db.object<any>('/shopping-carts/' + cardId + '/items/' + productId);
  }

  private async updateItem(product: Product, change: number) {
    const cardId = await this.getOrCreateCardId();
    const item$ = this.getItem(cardId, product.$key);
    item$.valueChanges().pipe(
      take(1)
    ).subscribe(item => {
      // const p = {...product};
      // delete p.$key;
      item$.update({
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: (item && item.quantity || 0) + change
      });
    });
  }
}
