import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-shop-accessories',
  templateUrl: './shop-accessories.component.html',
  styleUrls: ['./shop-accessories.component.css']
})
export class ShopAccessoriesComponent implements OnInit {
  products: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getAccessories()
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
