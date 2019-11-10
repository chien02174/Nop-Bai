import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyServiceService} from '.././services/my-service.service';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  
  constructor(private http : HttpClient, private oke: MyServiceService) { }
  url = 'assets/TaiNguyen/db/Students.js';
  checklogin :boolean = false;
  successLogin: any;
  userNameCheck: any;
  passwordCheck: any;
  students: any;
  newStudent: any
  ngOnInit() {
    this.getStudents().subscribe(data =>{
      this.students = data;
      console.log(data)
    })
    this.newStudent = this.oke.getStudent();
    console.log(this.newStudent)
  }
  getStudents(){
    return this.http.get(this.url)
  }
  checkLogin(){
    for(var student of this.students){
      if((this.userNameCheck === student.username) && (this.passwordCheck === student.password)){
        this.checklogin = true;
        return;
      }
    }
    for(var student of this.newStudent){
      if((this.userNameCheck === student.username) && (this.passwordCheck === student.password)){
        this.checklogin = true;
        return
      }
    }
    alert('Sai thong tin')
  }
  }

