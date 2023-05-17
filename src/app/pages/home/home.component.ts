import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Card from 'src/app/model/card.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isSubmitted = false;
  cards$!: Observable<Card[]>;
  currentSelectedCard!: Card;

  constructor(private productService: ProductService,

  ) {

  }

  ngOnInit(): void {
    this.cards$ = this.productService.getCardData();
    this.productService.formSubmitted$.subscribe(
      data => {
        this.isSubmitted = data;
      }
    )
    // this.activatedRoute.queryParams.subscribe(
    //   data => {
    //     console.log("The query params are::", data)
    //     this.isSubmitted = data['submit'] === '1';
    //   }
    // )
  }


  handleCardSelect(card: Card) {
    this.currentSelectedCard = card;
    console.log("handle data from parent::", card)
  }
}
