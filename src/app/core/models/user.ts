interface Usr {
  name: string;
  isAdmin: boolean;
}

export class User {
  name: string;
  isAdmin: boolean;

  constructor(public uid: string, user: Usr) {
    this.name = user.name;
    this.isAdmin = user.isAdmin;
  }
}
