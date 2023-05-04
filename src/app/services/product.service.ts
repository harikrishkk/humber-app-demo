import { Injectable } from '@angular/core';
import { cardData } from '../components/card/card.data';
import Card from '../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cardData = cardData;

  constructor() { }

  getCardData(): Card[] {
    return this.cardData
  }
}
