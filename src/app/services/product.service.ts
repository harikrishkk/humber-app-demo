import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
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

  getAllProductsByCategories(): Observable<any> {
    return this.http.get('https://productdemo-85335-default-rtdb.firebaseio.com/products.json').pipe(
      tap((data) => console.log("The data i received from DB ", data)),
      map(responseObj => {
        const obj = {} as any;
        const categories: string[] = [];
        const objResponse = responseObj as Card[];

        for (let item in objResponse) {
          if (categories.indexOf(objResponse[item].category) === -1) {
            categories.push(objResponse[item].category)
          }
        }

        categories.forEach(cat => {
          obj[cat] = [];
          for (let item in objResponse) {
            if (objResponse[item].category === cat) {
              obj[cat].push({ ...objResponse[item], id: item })
            }
          }
        })

        return obj
      })
    )
  }


  getProductById() {

  }
}
