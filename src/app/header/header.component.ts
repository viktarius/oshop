import { Component, OnInit } from '@angular/core';
import { UserModel } from '../core/modes/user.model';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: UserModel;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.user = user);
  }

  logout() {
    this.auth.logout();
  }

}
