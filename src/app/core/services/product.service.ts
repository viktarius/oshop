import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from '../models/product.model';
import { map } from 'rxjs/operators';
import { convertToArray } from '../utils/convert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) {
  }

  create(product: Product): void {
    this.db.list('/products').push(product);
  }

  update(productId: string, product: Product): void {
    this.db.object('/products/' + productId).update(product);
  }

  delete(productId: string): void {
    this.db.object('/products/' + productId).remove();
  }

  getAll(): Observable<Product[]> {
    return this.db.object('/products').valueChanges().pipe(
      map(convertToArray)
    );
  }

  get(productId: string): Observable<Product> {
    return this.db.object<Product>('/products/' + productId).valueChanges();
  }
}
