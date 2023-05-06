import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  comments = 'default value';
  banner = {
    heading: "Spring season is back!",
    subHeading: "And so is our offers too. So why waiting?",
    cta: "Check out all Products",
    url: "https://www.amazon.ca/"
  }
  constructor() {

  }
  handleClick() {
    console.log("CLicked the jumbotron button ")

  }
}

/**
 * Interpolation ( text binding ) - done
 * Attribute binding - done
 * Event binding
 * 2 way binding
 */
