import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryModel } from '../../core/modes/category.model';
import { CategoryService } from '../../core/services/category.service';
import { Observable } from 'rxjs';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {
  categories$: Observable<CategoryModel[]>;
  productForm: FormGroup;

  constructor(private categoryService: CategoryService,
              private formBuilder: FormBuilder,
              private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
    this.productForm = this.formBuilder.group({
      title: [''],
      price: [''],
      category: [''],
      imageUrl: ['']
    });
  }

  save(): void {
    this.productService.create(this.productForm.value);
  }

  get title(): string {
    return this.productForm.get('title').value;
  }

}
