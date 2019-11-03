import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.scss']
})
export class New1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 students = [
   {
     fullName: 'Nguyễn Văn Tèo',
     birthDay: '2-2-2018',
     gender:'Nữ',
     photo:'/assets/img/1.jpg',
     mark:'8.8',
   },
   {
    fullName: 'Phan Thị Nở',
    birthDay: '2-2-2018',
    gender:'Nữ',
    photo:'/assets/img/2.jpg',
    mark:'8.8',
  },
  {
    fullName: 'Nguyễn Khá bảnh',
    birthDay: '2-2-2018',
    gender:'Nam',
    photo:'/assets/img/3.jpg',
    mark:'8.8',
  }
 ]
}
