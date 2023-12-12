import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { StoricoOrdiniComponent } from './storico-ordini.component';

const routes: Routes = [
    { path: 'storicoordini', component: StoricoOrdiniComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoricoOrdiniRoutingModule {

}
