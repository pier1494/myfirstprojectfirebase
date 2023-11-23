import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemCarrello, prodotti } from './interfaceproduct/dbmodel';

@Injectable({
  providedIn: 'root'
})
export class CartservicesService {
  private cartItems: ItemCarrello[] = [];
  private cartSubject = new BehaviorSubject<ItemCarrello[]>([]);

  cart$ = this.cartSubject.asObservable();

  constructor() {}

  addToCart(product: prodotti | ItemCarrello): void {
    const itemCarrello: ItemCarrello = {
      id: product.id,
      immagine: product.immagine,
      titolo: product.titolo,
      prezzo: product.prezzo,
      quantita: (product as ItemCarrello).quantita || 1
    };
  
    this.cartItems.push(itemCarrello);
    this.cartSubject.next([...this.cartItems]);  // Chiamata a next per notificare gli osservatori del cambiamento nel carrello
  }
  

  getCartItems(): ItemCarrello[] {
    return this.cartItems;
  }

  getCartItemsObservable(): Observable<ItemCarrello[]> {
    return this.cartSubject.asObservable();
  }

  updateCarrello(item: any): void {
    const ordineNuovo = { ...item, quantita: 1 } as ItemCarrello;
    const indiceElementiUgualiNelCarello = this.cartItems.findIndex((o: ItemCarrello) => o.id === item.id);

    if (indiceElementiUgualiNelCarello > -1) {
      this.cartItems[indiceElementiUgualiNelCarello].quantita += 1;
    } else {
      this.cartItems.push(ordineNuovo);
    }
    this.cartSubject.next([...this.cartItems]);
  }
}
