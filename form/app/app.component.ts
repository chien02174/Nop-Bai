import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Lab5';
   list = [
     {
       age : "Dưới 25 Tuổi",
       rate : 0.07 
     },
     {
      age : "Từ 25 Đến 40",
      rate : 0.1
    },
    {
      age : "Trên 40",
      rate : 0.15
    },
   ]
   nuocngot = [
		{
			name: "Nước ngọt",
			price: 10000,
			quantity: 1
		},
		{
			name: "Cà phê đen",
			price: 12000,
			quantity: 1
		},
		{
			name: "Thuốc lá",
			price: 18000,
			quantity: 1
		},
	]
   employee = {
     name : null,
     salary : '0',
     gender : 'nam',
     age : '0',
   }
   
  hcn = {
    cd : null,
    cr : null,
    cv : null,
    dt : null
  }
    public mark : number;
  Calculator(){
    this.hcn.dt = this.hcn.cd * this.hcn.cr;
    this.hcn.cv = (this.hcn.cd + this.hcn.cr)*2;
  }
  TienThuong(){
    let s =this.employee.salary * this.employee.age;
    if (this.employee.gender == 'nu'){
      s = s + 200000;
    }
    return s;
  }
  All(){
    let b = 0 ;
    for(let i = 0;i < this.nuocngot.length;i++){
      b += this.nuocngot[i].price * this.nuocngot[i].quantity;
    }
    return b;
  }
}