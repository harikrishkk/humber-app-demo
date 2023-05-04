import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Card from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCardData(): Observable<any> {
    return this.http.get('https://productdemo-85335-default-rtdb.firebaseio.com/products.json')
  }
}
