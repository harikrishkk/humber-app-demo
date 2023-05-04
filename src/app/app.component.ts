import { Component, OnInit } from '@angular/core';
import Card from './model/card.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'humber-app-demo';
  cards: Card[] = [];
  currentSelectedCard!: Card;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.cards = this.productService.getCardData();
  }


  handleCardSelect(card: Card) {
    this.currentSelectedCard = card;
    console.log("handle data from parent::", card)
  }
}



