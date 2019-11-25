import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-web1',
  templateUrl: './web1.component.html',
  styleUrls: ['./web1.component.css']
})
export class Web1Component implements OnInit {

   url = 'assets/TaiNguyen/db/Subjects.js'
   urlText = 'assets/TaiNguyen/db/Quizs/'
    title : any ;
    id: any;
    text: any;
    subject: any;
    answer: any;
    currentPage = 1;
    totalPage: any;
    question: any;
    Mark= 0;
    Sum = [];
  constructor(private http : HttpClient ,private rout: ActivatedRoute) { }

  ngOnInit() {
    const url = this.rout.snapshot.paramMap.get('url')
    this.rout.paramMap.subscribe(param => {
      this.id = param.get('Id')
    })

    this.getAll().subscribe(data =>{
      this.title = data;
      this.text = this.title.find(p => p.Id === this.id)
    })
    console.log(this.id)
    this.urlText = this.urlText + this.id +'.json';

    this.getSubject().subscribe(data => {
      this.subject = data;
      this.answer = this.subject[this.currentPage- 1].Answers;
      this.totalPage = Math.ceil(this.subject.length / 1)
      console.log(this.answer)
    })
    
  }  

  getAll(){
    return this.http.get(this.url)
  }

  getSubject(){
    return this.http.get(this.urlText)
  }
  next() {
    if (this.currentPage < this.totalPage) {
      this.currentPage++;
      this.answer = this.subject[this.currentPage - 1].Answers;
    }
  }
  back() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.answer = this.subject[this.currentPage- 1].Answers;
    }

  }
  last() {
    this.currentPage = this.totalPage;
    this.answer = this.question[this.currentPage - 1].Answers;
    
  }
  first() {
    this.currentPage = 1;
    this.answer = this.question[this.currentPage - 1].Answers;
  }
  mark(){
    for(let i = 0; i< this.subject.length; i++) {
      
      this.Mark++;
    }  
  }
  tinhtien(){
    console.log(this.Sum)
    for(let i = 0; i < this.subject.length; i++) {
      if(this.Sum[i] == this.subject[i].AnswerId){
        this.Mark +=1;
      }
      if(this.Sum[i]=! this.subject[i].AnswerId){
        this.Mark +=0 ;
      }
      console.log(this.Mark)
    } 
  }
  }


