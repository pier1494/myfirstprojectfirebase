import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RecensioniComponent } from './recensioni.component';

const routes: Routes = [
    { path: 'recensioni', component: RecensioniComponent },

   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecensioniRoutingmodule {

}
