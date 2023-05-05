import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import Card from 'src/app/model/card.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards$!: Observable<Card[]>;
  currentSelectedCard!: Card;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.cards$ = this.productService.getCardData();
  }


  handleCardSelect(card: Card) {
    this.currentSelectedCard = card;
    console.log("handle data from parent::", card)
  }
}
