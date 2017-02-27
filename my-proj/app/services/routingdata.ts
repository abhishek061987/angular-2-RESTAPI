import {Injectable} from '@angular/core';


/***
 * this is a provider we will use through out the application to inject any routing parameter;
 * hence having public defination; include this in app.module
 * 
 */
@Injectable()
export class RoutingDataValue{
    public routingDataStorage:any;
    public constructor(){
        console.log('routing data injected :  -->  '+this.routingDataStorage);
    }
}