import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationServiceService } from 'src/app/navigation-service.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

export class TopbarComponent {
constructor(private router: Router,
  private NavigationServiceService: NavigationServiceService,){}
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
}
