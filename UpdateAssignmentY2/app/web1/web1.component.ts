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
    p = 1;
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

    this.urlText = this.urlText + this.id +'.js';
    this.getSubject().subscribe(data => {
      this.subject = data;
      this.answer = this.subject[this.p - 1].Answers;
    })
    
  }  

  getAll(){
    return this.http.get(this.url)
  }

  getSubject(){
    return this.http.get(this.urlText)
  }

  }


