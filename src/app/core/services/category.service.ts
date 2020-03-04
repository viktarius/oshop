import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CategoryModel } from '../modes/category.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) {
  }

  getCategories(): Observable<CategoryModel[]> {
    return this.db.object('/categories').valueChanges().pipe(
      map( obj => {
        const keys = Object.keys(obj);
        return keys.map( key => ({
          $key: key,
          ...obj[key]
        }));
      }));
  }
}
