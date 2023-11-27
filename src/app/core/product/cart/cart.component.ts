import { Component, OnInit } from '@angular/core';
import { CartservicesService } from '../cartservices.service';
import { Observable } from 'rxjs';
import { ItemCarrello } from '../interfaceproduct/dbmodel';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private cartServices: CartservicesService,
    private translate: TranslateService) {
    // translate.setDefaultLang('en');
    // translate.use('en');
  }
    
  cambiaLingua(language: string): void {
      this.translate.use(language);
    }
 
    ngOnInit(): void {
    this.cartItems$ = this.cartServices.getCartItemsObservable();
    this.calculateTotals();
  }

  updateQuantity(item: ItemCarrello): void {
    this.cartServices.updateCarrello(item);
    this.calculateTotals();
  }

  deleteItem(item: ItemCarrello): void {
      this.cartServices.deleteItem(item);
      this.calculateTotals();
    // Aggiungi la logica per eliminare un elemento dal carrello se necessario
    // this.cartServices.(item);
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
