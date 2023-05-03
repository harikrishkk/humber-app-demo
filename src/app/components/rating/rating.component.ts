import { Component, Input } from '@angular/core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating!: number;
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  get hasDecimal() {
    return this.rating % 1 != 0;
  }

  get ratingStars() {
    return new Array(Math.floor(this.rating));
  }
}
