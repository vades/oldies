import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { TokenComponent } from './token/token.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'token/:token', component: TokenComponent },
  { path: 'logout', component: LogoutComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
