import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../model/user.model';
import { EnterpriseService } from '../../service/enterprise.service';
import { Enterprise } from '../../model/enterprise.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

	public enterprises;

	constructor(
		private enterpriseService: EnterpriseService
	) { }

	ngOnInit() {
		this.enterpriseService.findAll()
			.then((enterprise: Enterprise[]) => this.enterprises = enterprise);
	}

}
