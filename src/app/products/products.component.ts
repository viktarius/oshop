import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { Observable } from 'rxjs';
import { ProductModel } from '../core/modes/product.model';
import { CategoryService } from '../core/services/category.service';
import { CategoryModel } from '../core/modes/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  categories$: Observable<CategoryModel[]>;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
    this.categories$ = this.categoryService.getAll();
  }

}
