import { Component, OnInit } 				from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { EnterpriseService } 				from '../../service/enterprise.service';
import { Enterprise, EnterpriseRequest }	from '../../model/enterprise.model';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html'
})
export class MyRequestComponent implements OnInit {

	constructor(
		private enterpriseService: EnterpriseService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	public enterprises: Enterprise[];
	public enterprise: Enterprise;

	public listRequest: EnterpriseRequest[];
	public requestFilter;

	ngOnInit() {
		let id = this.route.snapshot.paramMap.get('id');

		this.enterpriseService.findAll()
			.then((enterprises: Enterprise[]) => {
				this.enterprises = enterprises;
				if (id) {
					this.enterprise = enterprises.find((enterprise: Enterprise) => enterprise.id === Number(id));
					this.listRequest = this.enterprise.request;
				}
			});

	}

	cancelRequest(request) {
		this.enterprise.request = this.enterprise.request.filter((_request) => _request.id !== request.id);
		this.listRequest = this.enterprise.request;
		this.enterpriseService.update(this.enterprise);
	}

	onChange(enterprise) {
		this.listRequest = enterprise.request;
	}

	onFilter() {
		this.listRequest = this.enterprise.request;
		if (this.requestFilter) {
			this.listRequest = this.enterprise.request.filter((request) => request.id === Number(this.requestFilter));
		}
	}

}
