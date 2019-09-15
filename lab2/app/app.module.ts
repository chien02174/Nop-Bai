import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{RouterModule, Route} from'@angular/router';
import { AppComponent } from './app.component';
import { New1Component } from './new1/new1.component';
import { ActionComponent } from './action/action.component';

const appRoutes: Route = [
  // {path:'',redirectTo: '/students',pathMatch:'full'},
  {path:'',component: New1Component},
  {path:'new1',component: New1Component},
  {path:'action',component:ActionComponent},
  
 ]



@NgModule({
  declarations: [
    AppComponent,
    New1Component,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
      // {path: '',component:New1Component},
      // {path: 'new1',component: New1Component},
      // // {path: 'new1/:new1ID',component:ActionComponent},
      // {path: '**',redirectTo: 'new1',pathMatch:'full'},

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
