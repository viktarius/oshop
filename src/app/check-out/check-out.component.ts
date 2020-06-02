import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCartService } from '../core/services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../core/models/shopping-cart.model';
import { OrderService } from '../core/services/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../core/helpers/error-state-matcher';
import { AuthService } from '../core/services/auth.service';
import { Order } from '../core/models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  matcher = new MyErrorStateMatcher();
  subscriptions: Subscription;
  orderForm: FormGroup;
  cart: ShoppingCart;
  userId: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private shoppingCardService: ShoppingCartService,
              private orderService: OrderService,
              private router: Router) {
  }

  async ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      line1: ['', [Validators.required]],
      line2: [''],
      city: ['', [Validators.required]]
    });

    this.subscriptions = (await this.shoppingCardService.getCart()).subscribe(cart => this.cart = cart);
    this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder() {
    const order = new Order(this.userId, this.orderForm.value, this.cart);
    const result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  get name() {
    return this.orderForm.get('name');
  }

  get line1() {
    return this.orderForm.get('line1');
  }

  get city() {
    return this.orderForm.get('city');
  }
}
