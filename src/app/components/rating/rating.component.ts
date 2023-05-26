import { Component, Input } from '@angular/core';
import { faStar, faStarHalfStroke, faRankingStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  // 5
  @Input() rating!: number;
  faStar = faStar; // 1
  faStarHalfStroke = faStarHalfStroke;
  faRankingStar = faRankingStar // 0.5

  get hasDecimal() {
    return this.rating % 1 != 0;
  }

  get ratingStars() {
    return new Array(Math.floor(this.rating));
  }

  get remainingStars() {
    // if the difference is greater than 0.5 , then show atleast 1 empty star
    // const remaining = new Array(Math.floor(10 - Math.floor(this.rating)));
    return new Array(Math.floor(5 - this.rating));  // 5 - 3.5 => 1

    // console.log("TOTAL:5")
    // console.log("current rating:", this.rating)
    // console.log("ramining stars to be shown", 10 - Math.ceil(this.rating))
    // console.log("********************************")
  }
}
