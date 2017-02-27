import {RoutingDataValue } from '../services/routingdata';
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../services/search.service';

@Component({
    moduleId:module.id,
    selector:'searchresult',
    templateUrl:'searchresult.html',
})
export class SearchResult implements OnInit{
     id:number;
    policynumber:number;
    sourcecode:string;
    inqid:number;
    firstname:string;
    cdbRefId:number;    
    userId:number;
    title:string;
    body:string;
    values:string;
    searchResults :SearchResult []=[];

    public constructor(private _searchService:SearchService , private _routingDataValue:RoutingDataValue){
        console.log('routing data -->  '+JSON.stringify(this._routingDataValue.routingDataStorage));
    }
    ngOnInit(){
        console.log('ngOnInit -->  ');
        this.getINQSearchResult(); // it will load once htnl will be called  like onload funtion
    }
    
getINQSearchResult(){
    console.log('getINQSearchResult getINQSearchResult  ');
      this._searchService.getINQSearchResult(this.values)
     .subscribe(
         searchResults => {
             this.searchResults=searchResults;
            //  if(this.searchResults.length>0){
            //     this.router.navigate(['/searchresult']);
                 console.log('this.searchResults lenght  '+this.searchResults.length);
            //  }
            } ,
        error => {
            console.log(error);
        },
     () => console.log("Job Done Get !",this.searchResults.length) 
     );  
  } 

   exportCSV(posttable:SearchResult[]){
        var mystyle = {
            headers:true,
             caption: 'My Data',
              css: '.headers {color:yellow} .cell {color:blue} .caption: {font-size:200px}'
            };
        console.log('exportCSV posttable'+posttable);       
        alasql('SELECT * INTO XLSX("report.XLSX",?) FROM ?', [mystyle,posttable]);
   }

}