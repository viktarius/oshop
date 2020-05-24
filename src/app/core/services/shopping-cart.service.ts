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

  private create() {
    return this.db.list('/shopping-cards').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCard() {
    const cardId = await this.getOrCreateCardId();
    return this.db.object<ShoppingCart>('/shopping-cards/' + cardId).valueChanges()
      .pipe(
        map(x => new ShoppingCart(x.items))
      );
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
    return this.db.object<any>('/shopping-cards/' + cardId + '/items/' + productId);
  }

  async addToCard(product: Product) {
    this.updateItemQuantity(product, +1);
  }

  async removeFromCard(product: Product) {
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product: Product, change: number) {
    const cardId = await this.getOrCreateCardId();
    const item$ = this.getItem(cardId, product.$key);
    item$.valueChanges().pipe(
      take(1)
    ).subscribe(item => {
      const p = {...product};
      delete p.$key;
      item$.update({product: p, quantity: (item && item.quantity || 0) + change});
    });
  }

}
