import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CategoryModel } from '../modes/category.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { convertToArray } from '../utils/convert';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) {
  }

  getAll(): Observable<CategoryModel[]> {
    return this.db.object('/categories').valueChanges().pipe(
      map(convertToArray));
  }
}
