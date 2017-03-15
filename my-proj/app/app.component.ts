import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  template: `
  <div >
   <p-fieldset legend="SEIN APP">
   <router-outlet></router-outlet>
   </p-fieldset>
   </div>
  `
  ,
})
export class AppComponent  {
  }
