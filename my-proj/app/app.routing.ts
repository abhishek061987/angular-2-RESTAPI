
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import { LoginComponent }  from './login/login.component';
import { DashboardComponent }  from './DashBoard/dashboard.component';
import { AddupdateComponent }  from './add/addupdate';
import { ReportComponent }  from './report/reporting';
import { SearchComponent }  from './search/search';
import {AuthManager} from './services/auth.manager';
import {SearchResult} from './search/search.result';

/**A routed Angular application has one, singleton instance of the Router service.
 *  When the browser's URL changes, that router looks for a corresponding Route from 
 * which it can determine the component to display.
A router has no routes until you configure it. The following example creates four route 
definitions, configures the router via the RouterModule.forRoot method, and adds the result 
to the AppModule's imports array. */
const routes: Routes = [
    {path: '', pathMatch:'full',redirectTo:'login'},
    {path: 'login', component:LoginComponent},
    {path: 'dashboard', component:DashboardComponent , canActivate: [AuthManager] },
    {path: 'addupdate', component:AddupdateComponent, canActivate: [AuthManager] },
    {path: 'report', component:ReportComponent, canActivate: [AuthManager] },
    {path: 'search', component:SearchComponent, canActivate: [AuthManager] },
    {path: 'searchresult', component:SearchResult, canActivate: [AuthManager] },
];

@NgModule({
imports :[RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule{}

export const routingComponents   =[LoginComponent,DashboardComponent,AddupdateComponent,ReportComponent,SearchComponent,SearchResult];