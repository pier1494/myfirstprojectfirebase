import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

export class TopbarComponent {
constructor(private router: Router){
  
}
navigateToRegistration() {
  this.router.navigate(['/registration']);
  console.log('goRegistration')
}
navigateTologin() {
  this.router.navigate(['/login']);
}
}
