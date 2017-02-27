import {Injectable} from '@angular/core';
import { Http, Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import 'rxjs/add/operator/toPromise';
import {SearchResult} from '../search/search.result';
import {InqSearchComponent} from '../search/inqsearch.component'

import {AuthService} from '../services/authservice';

/** when we will use http we have to import httpmodule provider in out module ts to tell angular to inject 
 * http service wen required 
 */
@Injectable()
export class SearchService{
    private searchUrl:string = 'http://jsonplaceholder.typicode.com/posts/1/comments';
    constructor(private _http:Http , private authenticationService: AuthService){

    }
    getINQSearchResult(values:string):Observable<SearchResult[]>{
        console.log('method getINQSearchResult values --> ' +values);
        console.log('method getINQSearchResult values  this.authenticationService.token  --> ' +this.authenticationService.token );

         let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
 
        // // get users from api
        // return this.http.get('/api/users', options)
        //     .map((response: Response) => response.json());


        return this._http.get(this.searchUrl,options)
                    .map(this.extractData)
                    .do(value => console.log("data received : "+value))
                    .catch(this.handleError);
    }
     private extractData(res: Response) {
            let body = res.json();        
            return body || [];
  }
     private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
            let errMsg: string;
            console.log('method getINQSearchResult handleError +' +error.stringify);
            if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            } else {
            errMsg = error.message ? error.message : error.toString();
            }
            console.error(errMsg);
            return Observable.throw(errMsg);
  }
}