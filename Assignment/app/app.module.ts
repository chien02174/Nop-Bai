import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { CommentComponent } from './comment/comment.component';
import { ContactComponent } from './contact/contact.component';
import { QuestionComponent } from './question/question.component';
import { from } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
 
const appRoutes : Routes=[
  {
   path : '',
   redirectTo : '/index',
   pathMatch : 'full'
  },
  {
    path : 'index',
    component : HomeComponent
  }, 
  {
    path : 'home',
    component : HomeComponent
  }, 
  {
    path : 'comment',
    component : CommentComponent
  },
  {
    path : 'introduce',
    component : IntroduceComponent
  },
  {
    path : 'question',
    component : QuestionComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  
   {
     path :'dangky',
     component : DangkyComponent
   },
   {
    path :'dangnhap',
    component : DangnhapComponent
  },
  {
    path :'quenmatkhau',
    component : QuenmatkhauComponent
  },
  {
    path :'doimatkhau',
    component : DoimatkhauComponent
  },
  {
    path : '**',
    component : NotFoundComponent
   }



];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IntroduceComponent,
    CommentComponent,
    ContactComponent,
    QuestionComponent,
    NotFoundComponent,
    DangnhapComponent,
    DangkyComponent,
    QuenmatkhauComponent,
    DoimatkhauComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
