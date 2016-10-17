import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-shop-womens',
  templateUrl: './shop-womens.component.html',
  styleUrls: ['./shop-womens.component.css']
})
export class ShopWomensComponent implements OnInit {
  products: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getWomens()
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
