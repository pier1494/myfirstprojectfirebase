import { Component } from '@angular/core';
import { NavigationServiceService } from 'src/app/navigation-service.service';
import { TranslateService } from '@ngx-translate/core';
import { recensioni } from 'src/app/core/product/interfaceproduct/dbmodel';
import { RecensioniService } from './services/recensioni.service';
import { Observable, forkJoin, from, mergeMap, switchMap, toArray } from 'rxjs';
import { SocialService } from './services/social.service';
import { map } from 'rxjs';
import { Review } from './models/review.model';
import { DataService } from './../../cache/dataService';

@Component({
  selector: 'app-recensioni',
  templateUrl: './recensioni.component.html',
  styleUrls: ['./recensioni.component.scss']
})
export class RecensioniComponent {
  userReviews: Observable<recensioni[]> = new Observable<recensioni[]>();
  productReviews: Observable<recensioni[]> = new Observable<recensioni[]>();
  reviews: Observable<Review[]> = new Observable<Review[]>();
  data: any;

  constructor(   
    private recensioniService: RecensioniService,
    private socialService: SocialService
  ){}

  ngOnInit(): void {
    //const userId = 'ID dell\'utente';
    const userId = 'GBrt5EcaHshq9XBLf0oW';
    const productId = 'bQfenlbsfsW3AQ8Ah2Bh';
    this.reviews= this.recensioniService.getRecensioni();

    this.userReviews = this.recensioniService.getRecensioniByUserId(userId).pipe(
      switchMap((r: any) => {
        console.log("ARRIVO NELLO SWITCHMAP CON " + userId, r);
        return this.socialService.getUserInfo(userId).pipe(map((utente) => {
          console.log("OTTENGO INFO UTENTE ", utente);
          // TODO: operazione replicata -> da spostare in un service o metodo
          return r.map((el: any) => ({
            ...el,
            user: {
              userId: r.utente_id,
              profileImg: utente.img_profilo ? utente.img_profilo : '/assets/profiles/default.png',
              name: utente.nome ? utente.nome : 'Sconosciuto antipatico'
            }
          }));
        }))
      })
    );

    this.productReviews = this.recensioniService.getRecensioniByProductId(productId).pipe(
      switchMap((allReview: any[]) => {
        console.log("ARRIVO NELLO SWITCHMAP CON ", allReview);
        return from(allReview).pipe(
          mergeMap(review => {
            console.log("PROCESSO LA SINGOLA REVIEW");
            return this.socialService.getUserInfo(review.id_utente).pipe(map((utente) => {
              console.log("PROCESSO I DATI DELL'UTENTE", utente);
              // TODO: operazione replicata -> da spostare in un service o metodo
              return {
                ...review,
                user: {
                  userId: review.utente_id,
                  profileImg: utente.img_profilo ? utente.img_profilo : '/assets/profiles/default.png',
                  name: utente.nome ? utente.nome : 'Sconosciuto antipatico'
    
                }
              };
            }));
          }), 
          toArray()
        )
      })
    );

  }

}
