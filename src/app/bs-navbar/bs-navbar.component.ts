import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { UserModel } from '../modes/user.model';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})

export class BsNavbarComponent implements OnInit {
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
