import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  constructor(
    private router: Router
  ) {};

  public userLogin;

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