import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new3',
  templateUrl: './new3.component.html',
  styleUrls: ['./new3.component.scss']
})
export class New3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
     products = [
      {
        "Name": "Leaf Rake",
        "Code": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "/assets/img/10.jpg",
      
    },
    {
        
        "Name": "Garden Cart",
        "Code": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "/assets/img/11.jpg"
    },
    {
        
        "Name": "Hammer",
        "Code": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "/assets/img/12.jpg"
    },
    {
        
        "Name": "Saw",
        "Code": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "/assets/img/15.jpg"
    },
    {
        
        "Name": "Video Game Controller",
        "Code": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "/assets/img/14.jpg"
    },
     ]
}
