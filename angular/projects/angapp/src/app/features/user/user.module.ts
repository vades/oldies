import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [UserAccountComponent, UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
