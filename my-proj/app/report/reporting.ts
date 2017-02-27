import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'report',
    templateUrl:'report.html'
})

export class ReportComponent {
   constructor(private router:Router){
       console.log('inside consturctor the report');
   }
    
}