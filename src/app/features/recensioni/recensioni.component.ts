import { Component } from '@angular/core';
import { NavigationServiceService } from 'src/app/navigation-service.service';
import { TranslateService } from '@ngx-translate/core';
import { recensioni } from 'src/app/core/product/interfaceproduct/dbmodel';
import { RecensioniService } from './recensioniService';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-recensioni',
  templateUrl: './recensioni.component.html',
  styleUrls: ['./recensioni.component.scss']
})
export class RecensioniComponent {
  userReviews: Observable<recensioni[]> = new Observable<recensioni[]>();
  productReviews: Observable<recensioni[]> = new Observable<recensioni[]>();
  reviews: Observable<recensioni[]> = new Observable<recensioni[]>();
  constructor(private recensioniService: RecensioniService){}

  ngOnInit(): void {
    const id_utente = 'ID dell\'utente';
    const productId = 'ID del prodotto';
    this.reviews= this.recensioniService.getRecensioni();
    this.userReviews = this.recensioniService.getRecensioniByUserId(id_utente);
    this.productReviews = this.recensioniService.getRecensioniByProductId(productId);
  }
}
// ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  // this.reviews= this.recensioniService.getRecensioni();

//   this.recensioniService.getRecensioni().subscribe(reviews => {
//     // Per ogni recensione, ottieni i dettagli aggiuntivi (utente e prodotto)
//     this.reviews = forkJoin(
//       reviews.map(review => this.recensioniService.getReviewDetails(review.id))
//     );
//   });
//  }