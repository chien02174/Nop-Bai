import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from '../ProDuctSV/productservice.service'
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class CheckouComponent implements OnInit {

  constructor(private cart :  ProductserviceService) { }
  Cart : any;
  show : boolean = false;
  address:any;
  cardNumber : any;
  a = 80.25;
  b = 10;
  c = 1;
  ngOnInit() {
    this.Cart = this.cart.getItem()
    for(var i=0; i<this.Cart.length; i++){
      this.c += this.Cart[i].total;
    }
  }
  buttonShowOrder(){
    this.show= true;
  }
  getTotal(){
    return this.c + this.a + this.b;
  }
}
