import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {

  constructor(private router: Router) {}

  navigateToPrivateMain() {
    this.router.navigate(['/private']);
  }
}
