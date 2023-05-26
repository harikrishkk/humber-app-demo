
import { Component, OnInit } from '@angular/core';

import { map, Observable } from 'rxjs';
import { getCartTotal } from 'src/app/utils/util';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: []
})
export class CartComponent implements OnInit {

  cart$!: Observable<any>;
  cartTotal$!: Observable<number>;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cart$ = this.cartService.cartItems$;
    this.cartTotal$ = this.cart$.pipe(
      map((cart: any[]) => {
        return getCartTotal(cart)
      })
    )
  }

}
