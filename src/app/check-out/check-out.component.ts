import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCartService } from '../core/services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../core/models/shopping-cart.model';
import { OrderService } from '../core/services/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../core/helpers/error-state-matcher';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  matcher = new MyErrorStateMatcher();
  orderForm: FormGroup;
  shipping = {};
  cart: ShoppingCart;
  subscription: Subscription;

  constructor(private formBuilder: FormBuilder,
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

    this.subscription = (await this.shoppingCardService.getCart()).subscribe(cart => this.cart = cart);
  }

  placeOrder() {
    const order = {
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
    this.subscription.unsubscribe();
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
