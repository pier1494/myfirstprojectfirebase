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
count = 0;
  constructor(private cartServices: CartservicesService,
    private translate: TranslateService) {
    // translate.setDefaultLang('en');
    // translate.use('en');
  }
    
  toggleLanguage(): void {
    const currentLanguage = this.translate.currentLang;

    // Decide quale lingua attivare in base allo stato corrente del toggle
    const newLanguage = currentLanguage === 'en' ? 'it' : 'en';

    this.cambiaLingua(newLanguage);
  }

  cambiaLingua(language: string): void {
    this.translate.use(language);
  }
  
    ngOnInit(): void {
    this.cartItems$ = this.cartServices.getCartItemsObservable();
    this.calculateTotals();
  }
  
  add() {
    this.cartServices.update(++this.count);
  
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
    this.sommaTotaleSenzaIva = Number(this.sommaTotaleSenzaIva.toFixed(2));
    this.iva = Number(this.iva.toFixed(2));
    this.subtotale = Number(this.subtotale.toFixed(2));
    this.cartServices.setSubtotale(this.subtotale); // Imposta il subtotale nel servizio condiviso
  }
  updateSubtotal() {
    this.calculateTotals();
  
}

}