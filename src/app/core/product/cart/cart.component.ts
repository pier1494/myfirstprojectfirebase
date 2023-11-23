import { Component, OnInit } from '@angular/core';
import { CartservicesService } from '../cartservices.service';
import { Observable } from 'rxjs';
import { ItemCarrello } from '../interfaceproduct/dbmodel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<ItemCarrello[]> = new Observable<ItemCarrello[]>();
  costiSpedizione = 0;
  sommaTotaleSenzaIva = 0;
  iva = 0;
  subtotale = 0;

  constructor(private cartServices: CartservicesService) {}

  ngOnInit(): void {
    this.cartItems$ = this.cartServices.getCartItemsObservable();
    this.calculateTotals();
  }

  updateQuantity(item: ItemCarrello): void {
    this.cartServices.updateCarrello(item);
    this.calculateTotals();
  }

  deleteItem(item: ItemCarrello): void {
    // Aggiungi la logica per eliminare un elemento dal carrello se necessario
    // this.cartServices.deleteItem(item);
    // this.calculateTotals();
  }

  calculateTotals(): void {
    const cartItems = this.cartServices.getCartItems();
    this.costiSpedizione = 0;  // Sostituisci con la tua logica
    this.sommaTotaleSenzaIva = cartItems.reduce((acc, item) => acc + (parseFloat(item.prezzo) * item.quantita), 0);
    this.iva = this.sommaTotaleSenzaIva * 0.22;  // 22% IVA
    this.subtotale = this.sommaTotaleSenzaIva + this.iva;
  }
}
