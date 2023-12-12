import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserCredential, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NavigationServiceService } from "src/app/navigation-service.service";
import { LoaderService } from './../../loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private navigationService: NavigationServiceService,
    private loading: LoaderService) { }

  // signInUser(email: string, password: string): Promise<void> {
  //   const auth = getAuth();

  //   return signInWithEmailAndPassword(auth, email, password)
  //     .then(async (userCredential: UserCredential) => {
  //       const user = userCredential.user;
  //       // Aggiungi la logica di verifica utente nel database Firebase qui

  //       console.log("Verifica utente nel database riuscita");

  //       // Aggiorna i messaggi di errore e successo come desiderato
  //       this.errorMessage = '';  // Aggiorna con il messaggio di errore appropriato
  //       this.successMessage = 'Accesso riuscito! Benvenuto di nuovo!';

  //       // Esegui altre operazioni come necessario

  //       // this.navigationService.navigateToPrivateMain();
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.error("Errore durante l'autenticazione:", errorCode, errorMessage);

  //       // Aggiorna i messaggi di errore e successo come desiderato
  //       this.errorMessage = errorMessage;  // Aggiorna con il messaggio di errore appropriato
  //       this.successMessage = '';

  //       throw errorMessage; // Lanciare l'errore per essere gestito dal componente
  //     });}}
  
  
  
  
  async signInUser(email: string, password: string): Promise<UserCredential> {
    try {
      this.loading.showLoader();
      const auth = getAuth();
      return await signInWithEmailAndPassword(auth, email, password);
    }
     finally {
      // setTimeout(() =>       
      //  2000);
      this.loading.hideLoader();
    }
  }
  
  
  
  // signInUser(email: string, password: string): Promise<UserCredential> {
  //   this.loading.showLoader();
  //   const auth = getAuth();

  //   return signInWithEmailAndPassword(auth, email, password);
  // }
  

  // navigateToPrivateMain(): void {
  //   this.navigationService.navigateToPrivateMain();
  // }
}