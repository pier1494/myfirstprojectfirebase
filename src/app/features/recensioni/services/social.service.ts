import { Injectable } from '@angular/core';
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { Observable, catchError, combineLatest, forkJoin, map, of, switchMap } from "rxjs";
import { db } from "src/app/configurazioneFirebase";
import { LoaderService } from 'src/app/loader.service';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  private usersInfo: any = {};

  constructor(private loading: LoaderService) { }

  resetUsers() {
    this.usersInfo = {};
  }

  getUserInfo(userId: string): Observable<any> {
    this.loading.showLoader()    
    if (this.usersInfo[userId]) {
      console.log("RECUPERO DALLA CACHE " + userId );
      return of(this.usersInfo[userId]);
    }
    return new Observable<any>(observer => {
      getDoc(doc(db, 'users', userId)).then(snapshot => {
        console.log("RECUPERO DALLA WEB " + userId );
        const userData = snapshot.data();
        console.log("PASSO DALL'OBS: ", userData);
        this.usersInfo[userId] = userData;
        observer.next(userData);
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
