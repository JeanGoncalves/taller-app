import { Component, OnInit, Input } 			from '@angular/core';
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';
import { Router } 								from '@angular/router';

import { AuthService }        					from '../../auth.service';
import { User }               					from '../../model/user.model';
import { UserService }							from '../../service/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html'
})
export class MyAccountComponent implements OnInit {


	constructor(
		private authService: AuthService,
		private router: Router,
		private userService: UserService,
		private fb: FormBuilder
	) { }

	public user: User;

	ngOnInit() {
		this.user = this.authService.user;
		this.user.password = '';
	}


	/* Functions */
	onSave(param, isValid, form) {
		if (isValid) {
			let user = new User(this.user.id, param.name, param.email, btoa(param.password));

			this.userService.update(user)
				.then((user) => {
					form.reset();
					this.authService.user = user;
					this.cancel();
				});
		}
	}

	cancel() {
		this.router.navigate(['/admin']);
	}

}
