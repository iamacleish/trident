import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
 {  path: '',  redirectTo: 'welcome',  pathMatch: 'full'},
 {  path: 'login',  component: LoginComponent,},
 {  path: 'welcome', component: WelcomeComponent, canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
