import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { AsideTogglerComponent } from './header/aside-toggler/aside-toggler.component';

import { VdsNgkitModule } from '@app/lib/vades-ngkit';
import { MainMenuComponent } from './aside-left/main-menu/main-menu.component';
import { NgkitMenuComponent } from './aside-left/ngkit-menu/ngkit-menu.component';
import { DevMenuComponent } from './aside-left/dev-menu/dev-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VdsNgkitModule
  ],
  declarations: [HeaderComponent,FooterComponent, AsideLeftComponent, AsideTogglerComponent, MainMenuComponent, NgkitMenuComponent, DevMenuComponent],
  exports: [HeaderComponent,FooterComponent,AsideLeftComponent,AsideTogglerComponent]
})
export class LayoutModule { }
