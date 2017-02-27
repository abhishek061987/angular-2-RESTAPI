import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import  {AuthService} from './authservice'
/**
 * canActivate interface has canActivate() method
 * aruments - ActivatedRouteSnapshot,RouterStateSnapshot
 * return either Observable or a promise boolean
 */
@Injectable()
export class AuthManager implements CanActivate{
/**injecting any dependencies we need like authservice and router using contructor */
constructor(private authservice:AuthService,private router:Router){
    console.log('inside AuthManager constructor');
}

   canActivate(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot){
        console.log('canActivate -->  '+localStorage.getItem('currentUser'));                   
        if (localStorage.getItem('currentUser')) {
                // logged in so return true
                return true;
            } 
            // not logged in so redirect to login page
            this.router.navigate(['/login']);
            return false;
    }
    
}