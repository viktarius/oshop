import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCartService } from '../core/services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../core/models/shopping-cart.model';
import { OrderService } from '../core/services/order.service';
import { AuthService } from '../core/services/auth.service';
import { Order } from '../core/models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})

export class CheckOutComponent implements OnInit, OnDestroy {
  subscriptions: Subscription;
  cart: ShoppingCart;
  userId: string;

  constructor(private authService: AuthService,
              private shoppingCardService: ShoppingCartService,
              private orderService: OrderService,
              private router: Router) {
  }

  async ngOnInit() {
    this.subscriptions = (await this.shoppingCardService.getCart()).subscribe(cart => this.cart = cart);
    this.subscriptions.add(this.authService.user$.subscribe(user => this.userId = user.uid));
  }

  async placeOrder(formValue) {
    const order = new Order(this.userId, formValue, this.cart);
    const result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
