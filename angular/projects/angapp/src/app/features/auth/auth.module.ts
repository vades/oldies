import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { TokenComponent } from './token/token.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, RegisterComponent, PasswordComponent, TokenComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
