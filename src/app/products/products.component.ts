import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../core/models/product.model';
import { CategoryService } from '../core/services/category.service';
import { Category } from '../core/models/category.model';
import { ShoppingCartService } from '../core/services/shopping-cart.service';
import { ShoppingCart } from '../core/models/shopping-cart.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filterProducts: Product[] = [];
  categories$: Observable<Category[]>;
  cart$: Observable<ShoppingCart>;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private shoppingCardService: ShoppingCartService) {
  }

  async ngOnInit() {
    this.productService.getAll().subscribe(products => this.filterProducts = this.products = products);
    this.categories$ = this.categoryService.getAll();
    this.cart$ = await this.shoppingCardService.getCart();
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
