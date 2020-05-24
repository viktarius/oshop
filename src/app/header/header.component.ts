import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from '../core/models/user.model';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() theme;
  @Output() onThemeChange: EventEmitter<boolean> = new EventEmitter();

  user: UserModel;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.user = user);
  }

  logout() {
    this.auth.logout();
  }

  themeChange() {
    return this.onThemeChange.emit(!this.theme);
  }

}
