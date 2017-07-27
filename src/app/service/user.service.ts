import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { User }             from "../model/user.model";

@Injectable()
export class UserService {

    private userUrl: string = 'app/user';
    private headers: Headers = new Headers({'Content-type': 'application/json'});
    private nextId: number;

    constructor(
        private http: Http
    ) {}
    
    findAll(): Promise<User[]> {
        return this.http.get(this.userUrl)
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    find(email: string, password: string): Promise<User> {
        return this.findAll()
            .then((user: User[]) => user.find((user) => user.email === email && user.password === btoa(password)));
    }

    create(user: User): Promise<User> {
        // generate primary key Test Ambiance
        // this.findAll().then(data => user.id = data.length);

        return this.verifyEmail(user, (_user) => {
            this.http
            .post(this.userUrl, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then((response: Response) => response.json().data as User)
            .catch(this.handleError);
        })
        
        /*return this.http
            .post(this.userUrl, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then((response: Response) => response.json().data as User)
            .catch(this.handleError);*/
    }

    update(user: User): Promise<User> {
        const url = `${this.userUrl}/${user.id}`;
        
        return this.verifyEmail(user, (_user) => {
            this.http
            .put(url, JSON.stringify(_user), {headers: this.headers})
            .toPromise()
            .then(() => user as User)
            .catch(this.handleError);
        });
    }

    delete(user: User): Promise<User> {
        const url = `${this.userUrl}/${user.id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => user as User)
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }

    verifyEmail(user: User, callback) {
        return this.findAll().then((data) => {
            if (user.id === 0) { user.id = data.length + 1; }

            let hasEmail = data.find(_user => _user.email === user.email);
            if (!hasEmail) {
                return callback(user);
            }
            return false;
        });
    }
}