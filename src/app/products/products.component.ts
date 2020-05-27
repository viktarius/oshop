import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../core/models/product';
import { CategoryService } from '../core/services/category.service';
import { CategoryModel } from '../core/models/category.model';
import { ShoppingCartService } from '../core/services/shopping-cart.service';
import { ShoppingCart } from '../core/models/shopping-cart.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: Product[] = [];
  filterProducts: Product[] = [];
  // products$: Observable<ProductModel[]>;
  categories$: Observable<CategoryModel[]>;
  card: ShoppingCart;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private shoppingCardService: ShoppingCartService) {
  }

  async ngOnInit() {
    this.productService.getAll().subscribe(products => this.filterProducts = this.products = products);
    this.categories$ = this.categoryService.getAll();
    this.subscription = (await this.shoppingCardService.getCart())
      .subscribe(card => this.card = card);
  }

  categoriesChange(categories): void {
    const selectedCategories = categories.selectedOptions.selected.map(selected => selected.value);
    if (!selectedCategories.length) {
      this.filterProducts = this.products;
      return;
    }
    this.filterProducts = this.products.filter(product => selectedCategories.includes(product.category));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
