import { Component, OnInit }                    from '@angular/core';
import { Router, NavigationExtras }             from '@angular/router';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';

import { AuthService }                          from '../auth.service';
import { UserService }                          from '../service/user.service';
import { User }                                 from '../model/user.model'; 

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent  {

    constructor(
        private router: Router,
        private authService: AuthService,
        private userService: UserService,
        private fb: FormBuilder
    ) { }

    public form: FormGroup;
    public input = {
        email: '',
        password: '',
        saveStorage: false
    };
    public user: User;

    onLogin(login, isValid: boolean, form: FormGroup) {
        this.userService.findAll()
          .then((users: User[]) => console.log(users));

        if (isValid) {
            this.userService
                .find(login.email, login.password)
                .then((_user: User) => {
                    if (!_user) {
                        form.setValue({
                        email: login.email, 
                        password: null, 
                        saveStorage: login.saveStorage
                    });
                    return false;
                }
                this.authService.isLocalStorage = this.input.saveStorage;
                this.authService.user = _user;
                this.register();
            });
        }
    }

    register() {
        this.authService.login().subscribe(() => {
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
