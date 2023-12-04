import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import { NavigationServiceService } from 'src/app/navigation-service.service';
import { LoaderService } from 'src/app/loader.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router,
    private navigationService: NavigationServiceService,
    private LoaderService: LoaderService

  ) { }

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  signInUser() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, this.email, this.password)
      .then(async (userCredential: UserCredential) => {
        // Utente autenticato con successo
        const user = userCredential.user;
        // await this.verifyUserInFirebaseDatabase(user.uid)
        // Ora puoi verificare i dati utente nel database Firebase
        if (true) {
          console.log("Verifica utente nel database riuscita");

          // L'utente è valido nel database, reindirizza alla pagina "private"
          this.successMessage = "Accesso riuscito! Benvenuto di nuovo!";
          this.errorMessage = "";

          // Naviga solo dopo che l'autenticazione è completata
          this.navigationService.navigateToPrivateMain();
          console.log("Verifica utente nel database fallita");

        } else {
          this.errorMessage = "I dati utente non sono corretti. Riprova.";
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Errore durante l'autenticazione:", errorCode, errorMessage);
        this.errorMessage = "Si è verificato un errore durante l'accesso.";
      });
  }

  // async verifyUserInFirebaseDatabase(userUid: string): Promise<boolean> {
  //   const db = getDatabase();
  //   const userRef = ref(db, 'users/' + userUid);

  //   try {
  //     const userSnapshot = await get(userRef);

  //     if (userSnapshot.exists()) {
  //       // L'utente esiste nel database
  //       return true;
  //     } else {
  //       // L'utente non esiste nel database
  //       return false;
  //     }
  //   } catch (error) {
  //     // Gestisci l'errore
  //     console.error("Errore durante la verifica dei dati utente nel database:", error);
  //     return false;
  //   }
  // }
}



// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
// import { getDatabase, ref, get } from "firebase/database";

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   constructor(private router: Router) {}
//   email: string = '';
//   password: string = '';
//   errorMessage: string = '';
// successMessage: string = '';

// signInUser() {
//   const auth = getAuth();

//   signInWithEmailAndPassword(auth, this.email, this.password)
//     .then(async (userCredential: UserCredential) => {
//       // Utente autenticato con successo
//       const user = userCredential.user;

//       // Verifica l'autenticazione riuscita
//       if (user) {
//         // Ora puoi verificare i dati utente nel database Firebase
//         if (await this.verifyUserInFirebaseDatabase(user.uid)) {
//           // L'utente è valido nel database
//           this.successMessage = "Accesso riuscito! Benvenuto di nuovo!";
//           this.errorMessage = ""; 
//           this.navigateToPrivateMain(); // Chiamata solo se l'accesso ha successo
//         } else {
//           this.errorMessage = "I dati utente non sono corretti. Riprova.";
//         }
//       } else {
//         this.errorMessage = "Si è verificato un errore durante l'autenticazione.";
//       }
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       this.errorMessage = "Si è verificato un errore durante l'accesso.";
//       console.error("Errore durante l'autenticazione:", errorCode, errorMessage);
//     });
// }


// navigateToPrivateMain() {
//   this.router.navigate(['/private']);
// }
//   async verifyUserInFirebaseDatabase(userUid: string): Promise<boolean> {
//     const db = getDatabase();
//     const userRef = ref(db, 'users/' + userUid);

//     try {
//       const userSnapshot = await get(userRef);

//       if (userSnapshot.exists()) {
//         // L'utente esiste nel database
//         return true;
//       } else {
//         // L'utente non esiste nel database
//         return false;
//       }
//     } catch (error) {
//       // Gestisci l'errore
//       console.error("Errore durante la verifica dei dati utente nel database:", error);
//       return false;
//     }
//   }
// }



