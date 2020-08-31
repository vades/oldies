import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAccountComponent } from './user-account/user-account.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent},
  { path: 'account', component: UserAccountComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
