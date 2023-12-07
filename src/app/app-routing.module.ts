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
  {
    path: 'storico-ordini',
    loadChildren: () => {
      console.log("LOADING STORICO-ORDINI");
      return import('./features/storico-ordini/storico-ordini.module').then(m => m.StoricoOrdiniModule);
    }
  },
    {path: 'recensioni',
    loadChildren: () => {
      console.log("LOADING recensioni");
      return import('./features/recensioni/recensioni.module').then(m => m.RecensioniModule);
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
