import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "src/app/configurazioneFirebase";
import { LoaderService } from 'src/app/loader.service';
import { NavigationServiceService } from './../../../navigation-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  reactiveForm: FormGroup;
  errorMessages: string[] = [];
  successMessage: string[] = [];

  constructor(private fb: FormBuilder, private router: Router,
    private  loading: LoaderService,
    private NavigationServiceService: NavigationServiceService   ) {
  
    this.reactiveForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  validatePassword(): void {
    this.errorMessages = [];

    const passwordControl = this.reactiveForm.get('password');
    const confirmPasswordControl = this.reactiveForm.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;

      if (!password || !confirmPassword) {
        this.errorMessages.push('Entrambi i campi password sono obbligatori.');
      } else if (password !== confirmPassword) {
        this.errorMessages.push('Le password non corrispondono.');
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  async registerUser() {
    this.successMessage = [];
    this.errorMessages = [];
    this.validatePassword();
    this.loading.showLoader();

    if (this.reactiveForm.valid && this.errorMessages.length === 0) {

      const auth = getAuth();
      const email = this.reactiveForm.value.email;
      const password = this.reactiveForm.value.password;

      try {
        const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        this.successMessage.push('Registrazione avvenuta con successo, ti stiamo indirizzando nella pagina di login');

        setTimeout(() => {
          this.NavigationServiceService.navigateTologin();
        }, 1000);

        const docRef = await addDoc(collection(db, 'users'), {
          nome: this.reactiveForm.value.nome,
          cognome: this.reactiveForm.value.cognome,
          email: email,
          password: password,
          id: user.uid
        }); this.loading.hideLoader();

        console.log('Document written with ID: ', docRef.id);
      } catch (e: any) {
        if (e.code === 'auth/email-already-in-use') {
          this.errorMessages.push('Utente già registrato');
        } else if (e.code === 'auth/invalid-email') {
          this.errorMessages.push('Email non valida');
        } else {
          console.error('Errore durante la registrazione:', e);
          this.errorMessages.push('Errore durante la registrazione. Riprova più tardi.');
        } 
       

        }
    }
  }
}



// import { Component, ElementRef, ViewChild } from "@angular/core";
// import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from "@angular/forms";
// import { Router } from "@angular/router";
// import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "src/app/configurazioneFirebase";

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.scss']
// })
// export class RegistrationComponent {
//   reactiveForm: FormGroup;
//   errorMessages: string[] = [];
//   successMessage: string[] = [];


//   @ViewChild('passwordInput') passwordInput: ElementRef | undefined;
//   @ViewChild('confirmPasswordInput') confirmPasswordInput: ElementRef | undefined;

//   constructor(private fb: FormBuilder, private router: Router) {
//     this.reactiveForm = this.fb.group({
//       id: [''],
//       nome: ['', Validators.required],
//       cognome: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', Validators.required],
//     });
//   }

//   ngAfterViewInit() {
//     // Aggiungi gli ascoltatori agli eventi degli input
//     if (this.passwordInput && this.confirmPasswordInput) {
//       this.passwordInput.nativeElement.addEventListener('input', () => {
//         this.validatePassword();
//       });

//       this.confirmPasswordInput.nativeElement.addEventListener('input', () => {
//         this.validatePassword();
//       });
//     }
//   }

//   validatePassword(): void {
//     this.errorMessages = [];

//     const passwordControl = this.reactiveForm.get('password');
//     const confirmPasswordControl = this.reactiveForm.get('confirmPassword');


//     if (passwordControl && confirmPasswordControl) {
//       const password = passwordControl.value;
//       const confirmPassword = confirmPasswordControl.value;

//       if (!password || !confirmPassword) {
//         this.errorMessages.push('Entrambi i campi password sono obbligatori.');
//       } else if (password !== confirmPassword) {
//         this.errorMessages.push('Le password non corrispondono.');
//       } else {
//         confirmPasswordControl.setErrors(null);
//       }
//     }
//   }

//   async registerUser() {
//     this.successMessage = [];
//     this.errorMessages=[];
//     // Chiamare validatePassword prima di procedere
//     this.validatePassword(); 
  
//     if (this.reactiveForm.valid && this.errorMessages.length === 0) {
//       const auth = getAuth();
//       const email = this.reactiveForm.value.email;
//       const password = this.reactiveForm.value.password;
  
//       try {
//         const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;
//         this.successMessage.push('Registrazione avvenuta con successo, ti stiamo indirizzando nella pagina di login');
  
//         // Ritardare il redirect di 3 secondi (3000 millisecondi)
//         setTimeout(() => {
//           // Aggiungi qui la navigazione alla pagina successiva
//           this.router.navigate(['/login']);
//         }, 2000);
  
//         const docRef = await addDoc(collection(db, 'users'), {
//           nome: this.reactiveForm.value.nome,
//           cognome: this.reactiveForm.value.cognome,
//           email: email,
//           password: password,
//           id: user.uid
//         });
       
//       console.log('Document written with ID: ', docRef.id);
//     } catch (e: any) {
//       if (e.code === 'auth/email-already-in-use') {
//         this.errorMessages.push('Utente già registrato');
//       } else if (e.code === 'auth/invalid-email') {
//         this.errorMessages.push('Email non valida');
//       } else {
//         // Gestione generale di altri errori
//         console.error('Errore durante la registrazione:', e);
//         this.errorMessages.push('Errore durante la registrazione. Riprova più tardi.');
//       }
//     }
//   }
// }
// }