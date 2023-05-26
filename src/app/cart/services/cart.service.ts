import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<any[]>([])
  private cartArr: any[] = [];

  constructor() { }

  get cartItems$() {
    return this.cartItems.asObservable();
  }

  addItemsToCart(item: any) {
    const isAddedIndex = this.cartArr.findIndex(cartItem => cartItem.id === item.id);
    if (isAddedIndex === -1) {
      let cart = {
        id: item.id,
        quantity: 1,
        price: item.price,
        productName: item.header,
        thumbnail: item.thumbnail
      }
      this.cartArr.push(cart);
      this.cartItems.next(this.cartArr)
    }
    else {
      this.addMoreQuantity(item.id)
    }
  }

  addQuantity(id: string) {
    this.addMoreQuantity(id)
  }

  removeQuantity(id: string) {
    this.removeMoreQuantity(id);
  }

  private addMoreQuantity(id: string) {
    let cart = this.cartArr.map(cartItem => {
      return cartItem.id === id ? {
        ...cartItem,
        quantity: cartItem.quantity + 1
      } : cartItem
    })
    this.cartArr = [...cart];
    this.cartItems.next(cart)
  }

  private removeMoreQuantity(id: string) {
    const itemToRemove = this.cartArr.find(item => item.id === id);
    if (itemToRemove.quantity > 1) {
      itemToRemove.quantity = itemToRemove.quantity - 1;
      const cart = this.cartArr.map(item => {
        return item.id === id ? itemToRemove : item
      })
      this.cartArr = [...cart];
      this.cartItems.next(cart);
      return;
    }
    if (itemToRemove.quantity === 1) {
      this.deleteItem(id)
    }
  }

  deleteItem(id: string) {
    const cart = this.cartArr.filter(item => item.id !== id);
    this.cartArr = [...cart];
    this.cartItems.next(cart)
  }
}
