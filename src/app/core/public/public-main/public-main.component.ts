import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';
import { Observable } from 'rxjs';
import { prodotti } from './../../interface/dbmodel';
import { HttpClient } from '@angular/common/http';

@Component({
   selector: 'app-public-main',
   templateUrl: './public-main.component.html',
   styleUrls: ['./public-main.component.scss']
})
export class PublicMainComponent implements OnInit {
   title = "my app";
   products$: Observable<prodotti[]> = new Observable<prodotti[]>(); // Inizializza la variabile qui

   constructor(private productService: ProductServiceService,
   private http: HttpClient) { }
   ;

   ngOnInit(): void {
      this.products$ = this.productService.getProducts();
   }
}
