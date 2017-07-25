import { Component, OnInit } 	from '@angular/core';
import { Router }				from '@angular/router';

import { EnterpriseService } 	from '../../service/enterprise.service';
import { Enterprise }			from '../../model/enterprise.model';

@Component({
  selector: 'app-new-enterprise',
  templateUrl: './new-enterprise.component.html'
})
export class NewEnterpriseComponent implements OnInit {

  	constructor(
  		private router: Router,
  		private enterpriseService: EnterpriseService
	) { }

	public name: string;
	public cnpj: string;
	public maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

	private enterprises: Enterprise[];

	ngOnInit() {
		this.enterpriseService.findAll()
			.then((enterprises: Enterprise[]) => this.enterprises = enterprises);
	}

	onSubmit() {
		let enterprise = new Enterprise(this.enterprises.length + 1, this.name, this.cnpj, []);
		this.enterpriseService.create(enterprise)
			.then(() => {
				this.clear();
				this.router.navigate(['/admin']);
			});
	};

	onCancel() {
		this.clear();
		this.router.navigate(['/admin']);
	};

	private clear() {
		this.name = '';
		this.cnpj = '';
	}

}
