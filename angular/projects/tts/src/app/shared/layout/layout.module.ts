import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoComponent } from '@app/shared/svg/logo.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
    
  ],
  declarations: [HeaderComponent,FooterComponent,LogoComponent],
  exports: [HeaderComponent,FooterComponent]
})
export class LayoutModule { }
