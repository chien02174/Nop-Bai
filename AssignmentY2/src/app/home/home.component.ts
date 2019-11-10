import { Component, OnInit } from '@angular/core';
import {HttpClient, } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    listSubject : any;
    totalPage;
    url = 'assets/TaiNguyen/db/Subjects.js'
  constructor(private http : HttpClient) { }
  
  ngOnInit() {
    this.getAllSubject().subscribe(data=>{
        this.listSubject = data;
        console.log(data)
    })
  }
  getAllSubject(){
    return this.http.get(this.url)
}
//    nextPage(){
//     if(this.currentPage<this.totalPage){
//       this.currentPage++;
//     }
//   }
//   backPage(){
//     this.currentPage--;
//   }
//    LastPage(){
//     this.currentPage=this.totalPage
//   }
}
