import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../core/models/user';
import { AuthService } from '../../core/services/auth.service';
import { ShoppingCartService } from '../../core/services/shopping-cart.service';
import { ShoppingCart } from '../../core/models/shopping-cart.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() theme;
  @Output() onThemeChange: EventEmitter<boolean> = new EventEmitter();

  user: User;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService,
              private shoppingCardService: ShoppingCartService) {
  }

  async ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
    this.cart$ = await this.shoppingCardService.getCart();
  }

  logout() {
    this.auth.logout();
  }

  themeChange() {
    return this.onThemeChange.emit(!this.theme);
  }

}
