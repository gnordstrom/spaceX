import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-shop-kids',
  templateUrl: './shop-kids.component.html',
  styleUrls: ['./shop-kids.component.css']
})
export class ShopKidsComponent implements OnInit {
	products: any[] = [];

    constructor(private httpService: HttpService) { }

    ngOnInit() {
      this.httpService.getKids()
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
