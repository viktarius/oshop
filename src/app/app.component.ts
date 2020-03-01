import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService,
              private router: Router
  ) {
    auth.user$.subscribe(user => {
      if (user) {
        const returnUrl = localStorage.getItem('returnUrl') || '';
        this.router.navigateByUrl(returnUrl);
      }
    });
  }
}
