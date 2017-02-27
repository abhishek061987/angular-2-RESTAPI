import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  template: `
  <div  class="ui-grid ui-grid-responsive ui-grid-pad center-div">
  <p-panel  [style]="{'margin-top':'20px'}">
   <router-outlet></router-outlet>
   </p-panel>
  `
  ,
})
export class AppComponent  {
  }
