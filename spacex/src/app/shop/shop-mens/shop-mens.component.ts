import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-shop-mens',
  templateUrl: './shop-mens.component.html',
  styleUrls: ['./shop-mens.component.css'],
})

export class ShopMensComponent implements OnInit {
  products: any[] = [];

  constructor(private httpService: HttpService) {
  }


  ngOnInit() {
    this.httpService.getMens()
	  .subscribe(
        data => {
		  const myArray = [];
		  for (let key in data) {
			  myArray.push(data[key]);
		  }
		  this.products = myArray;
	  }
    );
  }

}
