import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentInit, OnDestroy, DoCheck {
  faTrash = faTrash;
  faMinus = faMinus;
  faPlus = faPlus;
  @Input() cartItem: any;

  constructor(private cartService: CartService) {
    console.log("1. inside constructor")
  }
  ngDoCheck(): void {
    console.log("CALLING DO CHECK")
  }
  ngOnInit(): void {
    console.log("2. inside onInit")
  }
  addItem(id: string) {
    this.cartService.addQuantity(id);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("3. inside onChanges", changes)
  }

  ngAfterViewInit(): void {
    console.log("4. inside ngAfterViewInit")
  }


  ngAfterContentInit(): void {
    console.log("5. inside ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("6. inside ngAfterContentChecked")
  }

  ngAfterViewChecked(): void {
    console.log("7. inside ngAfterViewChecked")
  }

  decrementItem(id: string) {
    this.cartService.removeQuantity(id);
  }

  deleteItem(id: string) {
    this.cartService.deleteItem(id);
  }
  ngOnDestroy(): void {
    console.log("8. inside ngOnDestroy")
  }
}
