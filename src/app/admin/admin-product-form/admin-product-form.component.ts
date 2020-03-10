import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { Observable } from 'rxjs';

import { CategoryModel } from '../../core/modes/category.model';
import { CategoryService } from '../../core/services/category.service';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {
  categories$: Observable<CategoryModel[]>;
  productForm: FormGroup;
  id: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
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
      imageUrl: ['', [Validators.required, CustomValidators.url]]
    });
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id)
        .pipe(take(1))
        .subscribe(product => {
          this.productForm.setValue(product);
        });
    }
  }

  save(): void {
    if (this.id) {
      this.productService.update(this.id, this.productForm.value);
    } else {
      this.productService.create(this.productForm.value);
    }
    this.router.navigate(['/admin/products']);
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
