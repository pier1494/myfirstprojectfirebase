import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicMainComponent } from './core/product/public-main/public-main.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { CartComponent } from './core/product/cart/cart.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => {
      console.log("LOADING AUTH");
      return import('./core/auth/auth.module').then(m => m.AuthModule);
    }
  },
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'carrello', component: CartComponent },
  { path: 'public', component: PublicMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
