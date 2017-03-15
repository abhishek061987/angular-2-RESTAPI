import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {InqSearchComponent} from './inqsearch.component'
import {SearchService} from '../services/search.service';
import {SearchResult} from './search.result';
import {RoutingDataValue } from '../services/routingdata';

// form validations and mandatory messages
import { Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms'; 
import {Message} from 'primeng/primeng';
//form validations ends
@Component({
    moduleId:module.id,
    selector:'search',
    templateUrl:'search.html',
})

export class SearchComponent implements OnInit { // form validations and mandatory messages
    // form validations and mandatory messages
     msgs: Message[] = [];    
    seininputform: FormGroup;    
    submitted: boolean;  
//form validations ends
    _seachinputcomponent:InqSearchComponent;
   constructor(private _searchService:SearchService, private router: Router,
                private routingdatavalues:RoutingDataValue,private _fb: FormBuilder){  // form validations and mandatory messages
    this._seachinputcomponent={
            ein:0,
            policynumber:0,
            sourcecode:'',
            inqid:0,
            firstname:'',
            cdbRefId:0
       }       
       console.log('inside consturctor the search '+this._seachinputcomponent.ein);       
   }
      // form validations and mandatory messages
    ngOnInit(){

            console.log('seininputform seininputform');
            // form validations and mandatory messages
            this.seininputform = this._fb.group({
            'cein': new FormControl('', Validators.required),
            'cpolicynumber': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4),Validators.pattern('^[0-9]*$')]))

        });
        // form validations and mandatory messages
        
  clearvalues() {
    console.log('clearvalues search ts', this._seachinputcomponent.ein);
       this.msgs = []; // form validations and mandatory messages
      
    this._seachinputcomponent.ein=0;
    this._seachinputcomponent.policynumber=0;
    this._seachinputcomponent.sourcecode='';
    this._seachinputcomponent.inqid=0;
    this._seachinputcomponent.firstname='';
    this._seachinputcomponent.cdbRefId=0;

  } 

  searchsubmit(){
      console.log('submit search');
      this.routingdatavalues.routingDataStorage={
          "searchinputs":{
                "ein": this._seachinputcomponent.ein,
                "policynumber":this._seachinputcomponent.policynumber,
                "sourcecode":this._seachinputcomponent.sourcecode,
                "inqid":this._seachinputcomponent.inqid,
                "firstname":this._seachinputcomponent.firstname,
                "cdbRefId":this._seachinputcomponent.cdbRefId
          }
        }

        if(this._seachinputcomponent.ein>0){
                        console.log('navigate to search result  ');
                        this.router.navigate(['/searchresult']);
        }else { // form validations and mandatory messages
                    // login failed
                    this.msgs.push({severity:'warn', summary:'Failed', detail:'Mandatory field sein4 and policy'});
                } // form validations and mandatory messages
    }
}
