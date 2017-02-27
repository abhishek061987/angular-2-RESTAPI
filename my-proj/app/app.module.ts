import { NgModule }      from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthManager } from './services/auth.manager';
import { AuthService } from './services/authservice';
import { AppComponent }  from './app.component';
import {AppRoutingModule,routingComponents}  from './app.routing';
import {DataTableModule,PanelModule,
  GrowlModule,InputTextModule,InputTextareaModule,TabViewModule,ButtonModule,CodeHighlighterModule,MessagesModule

} from 'primeng/primeng';
import {SearchService} from './services/search.service';
import {RoutingDataValue} from './services/routingdata';

import * as alasql from 'alasql';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


@NgModule({
  imports:      [ BrowserModule ,FormsModule,AppRoutingModule,HttpModule,
  DataTableModule,PanelModule,
  GrowlModule,InputTextModule,InputTextareaModule,TabViewModule,ButtonModule,CodeHighlighterModule,MessagesModule
  
  ,ReactiveFormsModule],
  declarations: [ AppComponent,routingComponents ],
  bootstrap:    [ AppComponent ],
  providers:    [ { provide: APP_BASE_HREF, useValue: '/' } ,AuthManager,AuthService 
                ,SearchService,RoutingDataValue,                
                 // providers used to create fake backend
                fakeBackendProvider,
                MockBackend,
                BaseRequestOptions
                
                ]
})
export class AppModule { }