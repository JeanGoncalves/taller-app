import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
		private enterpriseService: EnterpriseService,
		private router: Router
	) { }

	ngOnInit() {
		this.enterpriseService.findAll()
			.then((enterprise: Enterprise[]) => this.enterprises = enterprise);
	}

	onSelect(enterprise: Enterprise) {
		this.router.navigate(['admin/my-request', enterprise.id]);
	}
}
