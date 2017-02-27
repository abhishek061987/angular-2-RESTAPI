import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {InqSearchComponent} from './inqsearch.component'
import {SearchService} from '../services/search.service';
import {SearchResult} from './search.result';
import {RoutingDataValue } from '../services/routingdata';

@Component({
    moduleId:module.id,
    selector:'search',
    templateUrl:'search.html',
})

export class SearchComponent {
    _seachinputcomponent:InqSearchComponent;
   constructor(private _searchService:SearchService, private router: Router,
                private routingdatavalues:RoutingDataValue){
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
  clearvalues() {
    console.log('clearvalues search ts', this._seachinputcomponent.ein);
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
        }
    }
}