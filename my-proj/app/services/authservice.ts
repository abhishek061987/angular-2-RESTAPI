import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {User}  from '../login/user';
@Injectable()
export class AuthService {
    public token: string;
    isAuthenticated: boolean = false;
    constructor(private http: Http) {
        console.log('constructor auth service initaited');
                // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
       console.log('inside authservice constructor current user token   '+this.token);

    }
    authenticateNow(username: string, password: string) {
        console.log('authenticateNow'+username);
       return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });


    }

      logout(): void {
        // clear token remove user from local storage to log user out
          console.log('logged out');
           this.token = null;
        localStorage.removeItem('currentUser');
    }
}