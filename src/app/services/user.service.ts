import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { UserModel } from '../modes/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private db: AngularFireDatabase) {
  }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      isAdmin: false,
      email: user.email,
    });
  }

  get(uid: string): AngularFireObject<UserModel> {
    return this.db.object(`/users/${uid}`);
  }

}