import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavigationServiceService } from 'src/app/navigation-service.service';
import { AuthService } from './../auth/authservice';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

export class TopbarComponent {
constructor(private router: Router,
  private NavigationServiceService: NavigationServiceService,
  private Translate:TranslateService,
  private AuthService: AuthService){}

  toggleLanguage(): void {
    const currentLanguage = this.Translate.currentLang;

    // Decide quale lingua attivare in base allo stato corrente del toggle
    const newLanguage = currentLanguage === 'en' ? 'it' : 'en';

    this.cambiaLingua(newLanguage);
  }
  signOutUser() {
    this.AuthService.signOutUser().then(() => {
      // Gestisci il completamento del logout qui, ad esempio, reindirizza l'utente alla pagina di accesso
      this.NavigationServiceService.navigateTologin();
    });
  }
  cambiaLingua(language: string): void {
    this.Translate.use(language);
  }

  navigateToPrivateMain() {
    this.router.navigate(['/private']);
  }
  navigateToRegistration() {
  this.NavigationServiceService.navigateToRegistration();
  console.log('goRegistration')
}
navigateTologin() {
  this.NavigationServiceService.navigateTologin();
}
navigateToPublic() {
  this.NavigationServiceService.navigateToPublic();
}
navigateToHome() {
  this.NavigationServiceService.navigateToHome();
}
navigateToCart() {
  this.NavigationServiceService.navigateToCart();
}
navigateToStoricoordini() {
  this.NavigationServiceService.navigateToStoricoordini();
}
navigateToRecensioni() {
  this.NavigationServiceService.navigateToRecensioni();
}
}
