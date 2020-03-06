import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Observable } from 'rxjs';
import { ProductModel } from '../../core/modes/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }


}
