import { Component, OnInit } 	from '@angular/core';
import { Router } 				from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } 			from '../service/user.service';
import { User }					from '../model/user.model';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html'
})
export class NewAccountComponent implements OnInit {

	constructor(
		private router: Router,
		private userService: UserService,
		private fb: FormBuilder
	) {	}

	public form: FormGroup;
	public users: User[];
	public user: User = new User(0,'','','');
	public repassword: string;

	ngOnInit() {
		this.userService.findAll()
			.then((users: User[]) => this.users = users);
	}

	onCancel() {
		this.router.navigate(['/']);
	}

	onSave(newUser: User, isValid: boolean) {
		let user = new User(this.users.length + 1, newUser.name, newUser.email, btoa(newUser.password));
		if (isValid) {
			this.userService.create(user)
				.then(() => this.onCancel());
		}
	}
}
