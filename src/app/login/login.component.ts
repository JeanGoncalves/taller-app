import { Component, OnInit }        from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { AuthService }              from '../auth.service';
import { UserService }              from '../service/user.service';
import { User }                     from '../model/user.model'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent  {

  public input = {
    email: '',
    password: '',
    saveStorage: false
  };
  public user: User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  login() {

    this.userService
      .find(this.input.email, this.input.password)
      .then((user: User) => {
        this.authService.isLocalStorage = this.input.saveStorage;
        this.authService.user = user;
        this.onLogin();
      });

  }

  onLogin() {
    this.authService.login().subscribe((t) => {
      if (this.authService.user) {

        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

}
