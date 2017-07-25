import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './model/user.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  constructor(
    private router: Router
  ) {};

  private userLogin;
  public isLocalStorage: Boolean = false;

  public get user() {
    return this.userLogin;
  }

  public set user(user: User) {
    this.userLogin = user;
    if (this.isLocalStorage) {
      localStorage.setItem('user', btoa(JSON.stringify(user)));
    }
  }

  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  login(): Observable<boolean> {
    return Observable
            .of(true)
            .delay(1000)
            .do(val => this.userLogin);
  }

  logout(): void {
    this.userLogin = undefined;
    this.router.navigate(['/login']);
    localStorage.removeItem('user');
  }
}