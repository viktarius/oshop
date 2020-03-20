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
  products: ProductModel[] = [];
  filterProducts: ProductModel[] = [];
  // products$: Observable<ProductModel[]>;
  categories$: Observable<CategoryModel[]>;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => this.filterProducts = this.products = products);
    this.categories$ = this.categoryService.getAll();
  }

  categoriesChange(categories): void {
    const selectedCategories = categories.selectedOptions.selected.map(selected => selected.value);
    if (!selectedCategories.length) {
      this.filterProducts = this.products;
      return;
    }
    this.filterProducts = this.products.filter(product => selectedCategories.includes(product.category));
  }

}
