import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../authservice';
import { NavigationServiceService } from './../../../navigation-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private NavigationServiceService: NavigationServiceService

  ) {}

  signInUser() {
    this.authService.signInUser(this.email, this.password)
      .then((userCredential) => {
        // Operazioni da eseguire in caso di successo
        this.errorMessage = '';
        this.successMessage = 'Accesso riuscito! Benvenuto di nuovo!';
        // Altre operazioni...
        this.NavigationServiceService.navigateToPrivateMain();

      })
      .catch((error) => {
        // Operazioni da eseguire in caso di errore
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Errore durante l'autenticazione:", errorCode, errorMessage);
        this.errorMessage = errorMessage;
      });
  }
}
 



