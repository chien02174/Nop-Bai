import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import {ProductserviceService} from '../ProDuctSV/productservice.service'
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private rout: ActivatedRoute,private http: HttpClient, private cart: ProductserviceService) { }
  newA:any;
  quantity = 1;
  newProducts: any;
  products:any;
  list:any;
  id:any;
  price:any;
  url = './assets/db/guitar.json';
  discount = 0.3;
  total:any;
  saving: any;
  ngOnInit() {
    const url=this.rout.snapshot.paramMap.get('url');
    this.getProduct().subscribe(data=>{
      this.newProducts = data;
      this.products = this.newProducts.find(p => p.id === this.id);
      this.list = this.products.newfeature;
    })
    this.rout.paramMap.subscribe(param =>{
      this.id = +param.get('id')
    });
    
    
  };
  getProduct(){
    return this.http.get(this.url)
  }
  getYourPrice(){
    this.price  =  (this.products.price - this.products.price * this.discount);
    this.total = this.price * this.quantity
    return this.total
  }
  getSave(){
    this.saving = this.products.price * this.discount;
    return this.saving
  }

  addToCart(){
    this.newA = Object.assign(this.products,({quantity: this.quantity,yourPrice :  this.price, total : this.total,saving : this.saving }))
    this.cart.addToCart(this.newA);
    alert('Đã Thêm Vào Giỏ Hàng')
  }
}
