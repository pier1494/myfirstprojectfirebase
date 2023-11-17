import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "src/app/configurazioneFirebase";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {
  constructor(private router: Router) {}
nome: string = '';
cognome: string = '';
  email: string = '';
  password: string = '';
 id: string = ''

  
 
 
 
 
 registerUser() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then(async (userCredential: UserCredential) => {
        // Utente registrato con successo
        const user = userCredential.user;
        // Puoi accedere a 'this' qui
      
      try {
        const docRef = await addDoc(collection(db, "users"), {
          nome: this.nome,
          cognome:this.cognome,
          email: this.email,
          password:this.password,
          id: user.uid
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })}
}
