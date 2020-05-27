import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../core/services/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../core/models/shopping-cart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCart>;
  cart: ShoppingCart;
  displayedColumns: string[] = ['title', 'quantity', 'price'];

  constructor(private shoppingCardService: ShoppingCartService) {
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCardService.getCart();
    this.cart$.subscribe(items => {
      this.cart = items;
    });
  }

  getTotalQuantity() {
    return this.cart.items.reduce((acc, item) => acc += item.quantity, 0);
  }

  getTotalPrice() {
    return this.cart.items.reduce((acc, item) => acc += item.totalPrice, 0);
  }

  clearCart() {
    this.shoppingCardService.clearCart();
  }

}
