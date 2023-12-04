import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {

  constructor(private router: Router,
    ) {}


  navigateToPrivateMain() {
    this.router.navigate(['/private']);
  }
  navigateToRegistration() {
  this.router.navigate(['/auth/registration']);
  console.log('goRegistration')
}
navigateTologin() {
  this.router.navigate(['/auth']);
}
navigateToPublic() {
  this.router.navigate(['/public']);
}
navigateToHome() {
  this.router.navigate(['']);
}
navigateToCart() {
  this.router.navigate(['/carrello']);
}
}
