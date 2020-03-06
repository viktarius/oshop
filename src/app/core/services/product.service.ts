import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductModel } from '../modes/product.model';
import { map } from 'rxjs/operators';
import { convertToArray } from '../utils/convert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) {
  }

  create(product: ProductModel) {
    return this.db.list('/products').push(product);
  }

  getAll(): Observable<ProductModel[]> {
    return this.db.object('/products').valueChanges().pipe(
      map(convertToArray)
    );
  }

  get(productId: string): Observable<ProductModel> {
    return this.db.object<ProductModel>('/products/' + productId).valueChanges();
  }
}
