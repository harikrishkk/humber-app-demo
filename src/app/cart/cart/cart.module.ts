import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FontAwesomeModule,

  ],
  providers: []
})
export class CartModule { }
