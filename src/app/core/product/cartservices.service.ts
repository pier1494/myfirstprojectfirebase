import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemCarrello, prodotti } from './interfaceproduct/dbmodel';

@Injectable({
  providedIn: 'root'
})
export class CartservicesService {
  private cartItems: ItemCarrello[] = [];
  private cartSubject = new BehaviorSubject<ItemCarrello[]>([]);
  private subtotale: number = 0;

  cart$ = this.cartSubject.asObservable();

  constructor() {}

  private addToCart(product: prodotti | ItemCarrello): void {
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
  deleteItem(item: ItemCarrello): void {
    const posizioneProdotto = this.cartItems.indexOf(item);
  
    // verifica che ci sia un prodotto da eliminare
    if (posizioneProdotto > -1) {
      this.cartItems.splice(posizioneProdotto, 1);
      this.cartSubject.next([...this.cartItems]); // Notifica gli osservatori del cambiamento nel carrello
    }
}
setSubtotale(subtotale: number) {
  this.subtotale = subtotale;
}
getSubtotale(): number {
  return this.subtotale;
}

// creiamo un BehaviorSubject 
data$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

// emettere valori nel subject
update(value: number) { 
this.data$.next(value);
}

}