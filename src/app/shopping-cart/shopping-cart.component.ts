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
  displayedColumns: string[] = ['title', 'quantity'];

  constructor(private shoppingCardService: ShoppingCartService) {
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCardService.getCard();
  }

}
