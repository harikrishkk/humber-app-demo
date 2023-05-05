import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import Card from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCardData(): Observable<any> {
    return this.http.get('https://productdemo-85335-default-rtdb.firebaseio.com/products.json').pipe(
      map(responseObj => {
        const resultArr = [];
        const objResponse = responseObj as Card[];
        for (let item in objResponse) {
          resultArr.push({ ...objResponse[item], id: item })
        }
        return resultArr;
      })
    )
  }
}
