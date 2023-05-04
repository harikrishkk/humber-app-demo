import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import Card from './model/card.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'humber-app-demo';
  cards: any;
  currentSelectedCard!: Card;
  sub!: Subscription;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.sub = this.productService.getCardData().subscribe(
      data => {
        const response = []
        for (let key in data) {
          console.log(key)
          const responseItem = {
            id: key,
            ...data[key]
          }
          response.push(responseItem)
          this.cards = response
        }
      }
    )
  }


  handleCardSelect(card: Card) {
    this.currentSelectedCard = card;
    console.log("handle data from parent::", card)
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}



