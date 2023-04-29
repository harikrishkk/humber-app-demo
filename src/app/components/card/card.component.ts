import { Component, EventEmitter, Input, Output } from '@angular/core';
import Card from 'src/app/model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card!: Card;
  @Output() onCardSelect = new EventEmitter<Card>();

  handleClick() {
    this.onCardSelect.emit(this.card)
  }


}
