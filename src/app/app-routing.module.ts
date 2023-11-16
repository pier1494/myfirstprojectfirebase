import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateMainComponent } from './core/private/private-main/private-main.component';
import { PublicMainComponent } from './core/public/public-main/public-main.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegistrationComponent } from './core/auth/registration/registration.component';

const routes: Routes = [
  { path: 'private', component: PrivateMainComponent },
  { path: 'public', component: PublicMainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
