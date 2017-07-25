import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { Enterprise } from "../model/enterprise.model";

@Injectable()
export class EnterpriseService {

    private enterpriseUrl: string = 'app/enterprise';
    private headers: Headers = new Headers({'Content-type': 'application/json'});

    constructor(
        private http: Http
    ) {}
    
    findAll(): Promise<Enterprise[]> {
        return this.http.get(this.enterpriseUrl)
            .toPromise()
            .then(response => response.json().data as Enterprise[])
            .catch(this.handleError);
    }

    find(id: number): Promise<Enterprise> {
        return this.findAll()
            .then((enterprise: Enterprise[]) => enterprise.find((enterprise) => enterprise.id === id));
    }

    create(enterprise: Enterprise): Promise<Enterprise> {
        // generate primary key Test Ambiance
        this.findAll().then(data => enterprise.id = data.length);
        
        return this.http
            .post(this.enterpriseUrl, JSON.stringify(enterprise), {headers: this.headers})
            .toPromise()
            .then((response: Response) => response.json().data as Enterprise)
            .catch(this.handleError);
    }

    update(enterprise: Enterprise): Promise<Enterprise> {
        const url = `${this.enterpriseUrl}/${enterprise.id}`;
        
        return this.http
            .put(url, JSON.stringify(enterprise), {headers: this.headers})
            .toPromise()
            .then(() => enterprise as Enterprise)
            .catch(this.handleError);
    }

    delete(enterprise: Enterprise): Promise<Enterprise> {
        const url = `${this.enterpriseUrl}/${enterprise.id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => enterprise as Enterprise)
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
}