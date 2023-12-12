import { Injectable } from "@angular/core";
import { collection, getDocs } from "firebase/firestore";
import { Observable } from "rxjs";
import { db } from "src/app/configurazioneFirebase";
import { recensioni } from "src/app/core/product/interfaceproduct/dbmodel";
import { LoaderService } from "src/app/loader.service";
import { NavigationServiceService } from "src/app/navigation-service.service";

@Injectable({
    providedIn: 'root'
  })
  export class RecensioniService {

 
  
    constructor(private navigationService: NavigationServiceService,
      private loading: LoaderService) { }
      

      getRecensioni(): Observable<recensioni[]> {
        const reviewsCollection = collection(db, 'recensioni');
        return new Observable<recensioni[]>(observer => {
          this.loading.showLoader()
          getDocs(reviewsCollection).then(snapshot => {
            const reviews = snapshot.docs.map(doc => doc.data() as recensioni);
            observer.next(reviews);
            observer.complete();
           }).catch(error => {
            console.error('Errore durante il recupero dei prodotti da Firebase', error);
            observer.error(error)
           }).finally(() => {
            this.loading.hideLoader();
          });;
         
        });
      } 

    }