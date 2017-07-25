import { Component, OnInit } 	from '@angular/core';

import { EnterpriseService } 	from '../../service/enterprise.service';
import { Enterprise } 			from '../../model/enterprise.model';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html'
})
export class MyRequestComponent implements OnInit {

	constructor(
		private enterpriseService: EnterpriseService
	) { }

	public enterprises: Enterprise[];
	public enterprise: Enterprise;

	ngOnInit() {
		this.enterpriseService.findAll()
			.then((enterprises: Enterprise[]) => this.enterprises = enterprises);
	}

	cancelRequest(request) {
		let requestList = [];
		this.enterprise.request.forEach((_request) => {
			if (_request !== request) {
				requestList.push(_request);
			}
		});
		this.enterprise.request = requestList;
		this.enterpriseService.update(this.enterprise);
	}

}
