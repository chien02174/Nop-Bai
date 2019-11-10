import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{MyServiceService} from './../services/my-service.service';
@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  constructor(private http : HttpClient, private oke: MyServiceService) { }
  
  url = 'assets/TaiNguyen/db/Students.js';
  students: any;
  student = {
    username: null,
    password: null,
    fullname: null,
    email: null,  
  }
  list: any;
  ngOnInit() {
    this.getAllStudent().subscribe(data => {
      this.students = data;
      console.log(data)
    })
  }
  getAllStudent() {
    return this.http.get(this.url)
  }
  addStudent(){
    this.oke.addStudent(this.student)
    alert('Đăng Ký thành Công')
  }

    
  



}
