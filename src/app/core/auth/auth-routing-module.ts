import { RouterModule, Routes } from '@angular/router';
import { PrivateMainComponent } from './private-main/private-main.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'private', component: PrivateMainComponent },
    { path: '', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {

}
