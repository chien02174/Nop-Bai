import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { DetailComponent } from './one/one.component'
import {FormsModule} from '@angular/forms';
import { MyCartComponent} from './cart/cart.component';
import { CheckouComponent } from './two/two.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    MyCartComponent,
    CheckouComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'products', component : HomeComponent},
      { path: 'products/:id', component : DetailComponent},
      { path: 'cart', component: MyCartComponent},
      { path: 'checkout', component: CheckouComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
