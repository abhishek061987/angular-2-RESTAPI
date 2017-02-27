import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {InqProperty} from '../add/inqproperty';

@Component({
    moduleId:module.id,
    selector:'addupdate',
    templateUrl:'addupdate.html'
})

export class AddupdateComponent {
    inqproperty:InqProperty;
    constructor(private router:Router){
       console.log('inside consturctor the AddupdateComponent');
       this.inqproperty={
            ein:0,
            policynumber:0,
            sourcecode:'',
            inqid:0,
            firstname:'',
            cdbRefId:0
       }
   }
    
}