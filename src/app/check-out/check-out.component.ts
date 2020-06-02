import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCartService } from '../core/services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../core/models/shopping-cart.model';
import { OrderService } from '../core/services/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../core/helpers/error-state-matcher';
import { AuthService } from '../core/services/auth.service';

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
              private orderService: OrderService) {
  }

  async ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      line1: ['', [Validators.required]],
      line2: ['', []],
      city: ['', [Validators.required]]
    });

    this.subscriptions = (await this.shoppingCardService.getCart()).subscribe(cart => this.cart = cart);
    this.subscriptions.add(this.authService.user$.subscribe(user => this.userId = user.uid));
  }

  placeOrder() {
    const order = {
      userId: this.userId,
      datePlaced: new Date().getTime(),
      shipping: this.orderForm.value,
      items: this.cart.items.map(i => ({
        product: {
          title: i.title,
          imageUrl: i.imageUrl,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      }))
    };

    this.orderService.storeOrder(order);
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
