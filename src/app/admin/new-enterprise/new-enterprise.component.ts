import { Component, OnInit } 					from '@angular/core';
import { Router }								from '@angular/router';
import { FormBuilder, FormGroup, Validators } 	from '@angular/forms';

import { EnterpriseService } 					from '../../service/enterprise.service';
import { Enterprise }							from '../../model/enterprise.model';

@Component({
  selector: 'app-new-enterprise',
  templateUrl: './new-enterprise.component.html'
})
export class NewEnterpriseComponent implements OnInit {

  	constructor(
  		private router: Router,
  		private enterpriseService: EnterpriseService,
		private fb: FormBuilder
	) { }

	private enterprises: Enterprise[];

	public maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
	public enterprise: Enterprise = new Enterprise(0, '', '');

	ngOnInit() {
		this.enterpriseService.findAll()
			.then((enterprises: Enterprise[]) => this.enterprises = enterprises);
	}

	onSave(param, isValid: boolean, form: FormGroup) {
		if (isValid) {
			let enterprise = new Enterprise(this.enterprises.length + 1, param.name, param.cnpj, []);
			
			this.enterpriseService.create(enterprise)
				.then(() => {
					form.reset();
					this.router.navigate(['/admin']);
				});
		}
	};

	onCancel() {
		this.router.navigate(['/admin']);
	};
}
