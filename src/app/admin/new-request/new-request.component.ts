import { Component, OnInit, Input } from '@angular/core';

import { EnterpriseService } from '../../service/enterprise.service';
import { ProductService }	 from '../../service/product.service';
import { Enterprise, 
		 EnterpriseRequest,
		 EnterpriseProducts }from '../../model/enterprise.model';	
import { Product }			 from '../../model/product.model';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {

	constructor(
		private enterpriseService: EnterpriseService,
		private productService: ProductService
	) { }

	@Input()
		public quantity: number = 1;

	public enterprises:  Enterprise[];
	public products: 	 Product[];
	public request: 	 Array<EnterpriseRequest> = [];
	public listProducts: Array<EnterpriseProducts> = [];

	public enterprise: 	Enterprise;
	public product: 	Product;
	
	ngOnInit() {
		this.enterpriseService.findAll()
			.then((enterprises: Enterprise[]) => this.enterprises = enterprises);

		this.productService.findAll()
			.then((products: Product[]) => this.products = products);
	}

	/* Functions */
	qtdUp() {
		this.quantity++;
	};

	qtdDown() {
		if (this.quantity > 1) {
			this.quantity--;
		}
	};

	clearList() {
		this.listProducts = [];
	}

	addProductToList() {
		let hasProduct = false;
		this.listProducts.forEach((product) => {
			if (product.id === this.product.id) {
				product.quantity += this.quantity;
				hasProduct = true;
			}
		});

		if (!hasProduct) { 
			let product = new EnterpriseProducts(this.product.id, this.product.name, this.quantity);
			this.listProducts.push(product);
		}
		this.quantity = 1;
		this.product = undefined;
	};

	createRequest() {
		let request = new EnterpriseRequest(this.enterprise.request.length + 1, this.listProducts);
		this.request.push(request);
		this.enterprise.request.push(request);

		this.enterpriseService.update(this.enterprise);
		this.listProducts = [];
	}

	onRemove(product) {
		let index = this.listProducts.indexOf(product);
		this.listProducts.splice(0, index);
	}
}
