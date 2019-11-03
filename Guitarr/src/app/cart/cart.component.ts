import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from '../ProDuctSV/productservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class MyCartComponent implements OnInit {

  constructor(private cart: ProductserviceService) { }
  myCart:any
  total=1;
  ngOnInit() {
    this.myCart = this.cart.getItem();
    console.log(this.myCart)
    for(var i=0; i<this.myCart.length; i++){
      this.total += this.myCart[i].total;
    }
    console.log(this.total)
  }

}
