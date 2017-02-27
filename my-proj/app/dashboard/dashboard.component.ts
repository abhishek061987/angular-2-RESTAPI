import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'dashboard',
    templateUrl:'dashboard.html'
    })

export class DashboardComponent implements OnInit  {
    constructor(private router:Router){
        console.log('inside dashborad constructor');
    }
    ngOnInit (){}
    logout() {
    console.log('inside logout 11');
     this.router.navigate['login'];
    }
}