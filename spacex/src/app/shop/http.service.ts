import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class HttpService {

  constructor(private http: Http) { }

  getMens() {
    return this.http.get('https://spacex-d2f2d.firebaseio.com/mens.json')
      .map(res => res.json());
  }
  getWomens() {
    return this.http.get('https://spacex-d2f2d.firebaseio.com/womens.json')
      .map(res => res.json());
  }
  getKids() {
    return this.http.get('https://spacex-d2f2d.firebaseio.com/kids.json')
      .map(res => res.json());
  }
  getAccessories() {
    return this.http.get('https://spacex-d2f2d.firebaseio.com/accessories.json')
      .map(res => res.json());
  }

}
