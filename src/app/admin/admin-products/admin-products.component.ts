import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../core/services/product.service';
import { ProductModel } from '../../core/modes/product.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource: MatTableDataSource<ProductModel>;
  subscription: Subscription;

  products: ProductModel[];
  filterProducts: ProductModel[];
  displayedColumns: string[] = ['title', 'price', 'edit'];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.products = products;
    });
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
