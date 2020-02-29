import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  constructor(private afAuth: AngularFireAuth) {
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
