import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { CommentComponent } from './comment/comment.component';
import { ContactComponent } from './contact/contact.component';
import { QuestionComponent } from './question/question.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { QuenmatkhauComponent } from './quenmatkhau/quenmatkhau.component';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau.component';
import { Web1Component } from './web1/web1.component';
import {NgxPaginationModule} from 'ngx-pagination';
 


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
    DoimatkhauComponent,
    Web1Component,
 
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'home/:Id', component: Web1Component},
      {path: 'comment', component: CommentComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'dangky', component: DangkyComponent},
      {path: 'dangnhap', component: DangnhapComponent},
      {path: 'doimatkhau', component: DoimatkhauComponent},
      {path: 'header', component: HeaderComponent},
      {path: 'introduce', component: IntroduceComponent},
      {path: 'question', component: QuestionComponent},
      {path: 'quenmatkhau', component: QuenmatkhauComponent},
      

      


    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
