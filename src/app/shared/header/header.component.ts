import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from '../../core/models/user.model';
import { AuthService } from '../../core/services/auth.service';
import { ShoppingCardService } from '../../core/services/shopping-card.service';
import { ShoppingCard } from '../../core/models/shopping-card.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() theme;
  @Output() onThemeChange: EventEmitter<boolean> = new EventEmitter();

  user: UserModel;
  card: ShoppingCard;
  shoppingCardItemCount: number;

  constructor(private auth: AuthService,
              private shoppingCardService: ShoppingCardService) {
  }

  async ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
    (await this.shoppingCardService.getCard()).valueChanges()
      .subscribe(card => {
        this.shoppingCardItemCount = 0;
        for (const productId in card.items) {
          this.shoppingCardItemCount += card.items[productId].quantity;
        }
      });
  }

  logout() {
    this.auth.logout();
  }

  themeChange() {
    return this.onThemeChange.emit(!this.theme);
  }

}
