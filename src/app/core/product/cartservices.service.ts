import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { prodotti } from './interfaceproduct/dbmodel';

@Injectable({
  providedIn: 'root'
})
export class CartservicesService {
  private cartItems: prodotti[] = [];
  private cartSubject = new BehaviorSubject<prodotti[]>([]);

  cart$ = this.cartSubject.asObservable();
  constructor() { }

  addToCart(product: prodotti): void {
    this.cartItems.push(product);
    this.cartSubject.next([...this.cartItems]);
  }
  getCartItems(): prodotti[] {
    return this.cartItems;
  }
}
