import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { Observable } from 'rxjs';

import { CategoryModel } from '../../core/modes/category.model';
import { CategoryService } from '../../core/services/category.service';
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
      title: ['', [Validators.required]],
      price: ['', [Validators.required, CustomValidators.min(0)]],
      category: ['', [Validators.required]],
      imageUrl: ['', [Validators.required,  CustomValidators.url]]
    });
  }

  save(): void {
    this.productService.create(this.productForm.value);
  }

  get title() {
    return this.productForm.get('title');
  }

  get price() {
    return this.productForm.get('price');
  }

  get category() {
    return this.productForm.get('category');
  }

  get imageUrl() {
    return this.productForm.get('imageUrl');
  }

}
