import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { Product } from "../model/product.model";

@Injectable()
export class ProductService {

    private productUrl: string = 'app/product';
    private headers: Headers = new Headers({'Content-type': 'application/json'});

    constructor(
        private http: Http
    ) {}
    
    findAll(): Promise<Product[]> {
        return this.http.get(this.productUrl)
            .toPromise()
            .then(response => response.json().data as Product[])
            .catch(this.handleError);
    }

    find(id: number): Promise<Product> {
        return this.findAll()
            .then((product: Product[]) => product.find((product) => product.id === id));
    }

    create(product: Product): Promise<Product> {
        // generate primary key Test Ambiance
        this.findAll().then(data => product.id = data.length);
        
        return this.http
            .post(this.productUrl, JSON.stringify(product), {headers: this.headers})
            .toPromise()
            .then((response: Response) => response.json().data as Product)
            .catch(this.handleError);
    }

    update(product: Product): Promise<Product> {
        const url = `${this.productUrl}/${product.id}`;
        
        return this.http
            .put(url, JSON.stringify(product), {headers: this.headers})
            .toPromise()
            .then(() => product as Product)
            .catch(this.handleError);
    }

    delete(product: Product): Promise<Product> {
        const url = `${this.productUrl}/${product.id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => product as Product)
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
}