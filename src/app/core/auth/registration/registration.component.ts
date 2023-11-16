import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {
  constructor(private router: Router) {}

  email: string = '';
  password: string = '';

  registerUser() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential: UserCredential) => {
        // Utente registrato con successo
        const user = userCredential.user;
        // Puoi accedere a 'this' qui
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Errore durante la registrazione:', errorCode, errorMessage);
        // Gestisci l'errore o mostra un messaggio all'utente
      });
  }
}
