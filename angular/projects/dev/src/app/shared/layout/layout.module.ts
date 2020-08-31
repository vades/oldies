import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsideTogglerComponent } from './header/aside-toggler.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { MainMenuComponent } from './aside-left/main-menu/main-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoComponent } from '@app/shared/svg/logo.component';
import { NgkDirectivesModule } from '@ngk/directives/';
import { NgkDropdownModule } from '@ngk/components';
import { MaterialModule } from '@app/shared/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgkDirectivesModule,
    NgkDropdownModule,
    MaterialModule
    
  ],
  declarations: [HeaderComponent,FooterComponent,LogoComponent,AsideTogglerComponent,AsideLeftComponent,MainMenuComponent],
  exports: [HeaderComponent,FooterComponent,AsideLeftComponent]
})
export class LayoutModule { }
