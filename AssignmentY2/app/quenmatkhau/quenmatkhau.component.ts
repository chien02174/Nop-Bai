import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MyServiceService} from '.././services/my-service.service';
@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent implements OnInit {

  constructor(private http : HttpClient, private stu: MyServiceService) { }
  url = 'assets/TaiNguyen/db/Students.js';
  pass: boolean = false;
  userNameCheck: any;
  emailCheck: any;
  students: any;
  newStudents: any;
  ngOnInit() {
    this.getStudents().subscribe(data => {
      this.students = data;
    })
    this.newStudents = this.stu.getStudent();
    console.log(this.newStudents)

  }
      

  getStudents(){
    return this.http.get(this.url);
  }

  forgotPass(){
    for(var stu of this.students){
      if(this.userNameCheck === stu.username && this.emailCheck === stu.email){
        this.pass = true;
        return stu.password;
      
      }
    }
    for(var stu of this.newStudents){
      if(this.userNameCheck === stu.userName && this.emailCheck === stu.email){
        this.pass = true;
        return stu.password;
      }
    }
  }

}
