import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../core/services/product.service';
import { ProductModel } from '../../core/modes/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: ProductModel[];
  filterProducts: ProductModel[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.subscription = this.productService.getAll().subscribe(products => this.filterProducts = this.products = products);
  }

  filter(query: string) {
    this.filterProducts = (query) ?
      this.products.filter(product => product.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
