import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-doimatkhau',
  templateUrl: './doimatkhau.component.html',
  styleUrls: ['./doimatkhau.component.css']
})
export class DoimatkhauComponent implements OnInit {

     
  constructor(private http: HttpClient) { }
  url = 'assets/TaiNguyen/db/Students.js';
  students: any;
  userName: any;
  newPass: any;
  rePass: any;
  ngOnInit() {
    this.getStudents().subscribe(data => {
      this.students = data;
    })


  }
  changePass() {
    for (var stu of this.students) {
      if (this.userName === stu.username) {
        if (this.newPass === this.rePass) {
          stu.password = this.rePass;
          console.log(stu.password)
        }
      }
    }

  }
  getStudents() {
    return this.http.get(this.url)
  }
}
   
