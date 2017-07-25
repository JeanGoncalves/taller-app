import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService }        	from '../../auth.service';
import { User }               	from '../../model/user.model';
import { UserService }			from '../../service/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html'
})
export class MyAccountComponent implements OnInit {

	public user: User;
	public sPassword;
	public sRepassword;

	constructor(
		private authService: AuthService,
		private router: Router,
		private userService: UserService
	) { }

	ngOnInit() {
		this.user = this.authService.user;
	}


	/* Functions */
	submit() {
		if (this.sPassword === this.sRepassword) {
			this.user.password = btoa(this.sPassword);
		}

		this.userService.update(this.user)
			.then((user) => {
				this.authService.user = user;
				this.cancel();
			});
	}

	cancel() {
		this.sPassword = undefined;
		this.sRepassword = undefined;
		this.router.navigate(['/admin']);
	}

}
