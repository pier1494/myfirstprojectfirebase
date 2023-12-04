import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecensioniComponent } from './recensioni.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: RecensioniComponent }
];

@NgModule({
  declarations: [
    RecensioniComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)    
  ]
})
export class RecensioniModule { }
