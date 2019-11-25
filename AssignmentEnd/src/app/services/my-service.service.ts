import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
    
  students = [] ;
  changeStudents: any;
  constructor()  { }

  addStudent(student){
this.students.push(student)
  }
  getStudent(){
    return this.students;
  }
}
