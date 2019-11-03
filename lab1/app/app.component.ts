import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nop-bai';
     student = {
    fullName:'Nguyễn Văn Tèo',
    birthDay : '20-01-1999',
    photo: '/assets/img/23.jpg',
    mark : '8.5',
    gender:'Nam',
  }
  
}
