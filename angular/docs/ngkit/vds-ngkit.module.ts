import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VdsAlertComponent } from './alert/vds-alert.component';
import { VdsNotifyComponent } from './notify/vds-notify.component';
import { VdsModalComponent } from './modal/vds-modal.component';
import { VadesNgkitAccordionComponent } from './accordion/vades-ngkit-accordion.component';
import { VadesNgkitAccordionGroupComponent } from './accordion/vades-ngkit-accordion-group.component';
import { VdsBlankStateComponent } from './blank-state/vds-blank-state.component';
import { VdsPageHeaderComponent } from './page-header/vds-page-header.component';
import { VdsDropdownComponent } from './dropdown/vds-dropdown.component';
import { VdsClickOutsideDirective } from './directives/vds-click-outside.directive';
import { VadesNgkitTabComponent } from './tab/vades-ngkit-tab.component';
import { VadesNgkitTabsetComponent } from './tab/vades-ngkit-tabset.component';
import { VadesNgkitTooltipComponent } from './tooltip/vades-ngkit-tooltip.component';
import { VdsCardComponent } from './card/vds-card.component';
import { VdsCardWrapComponent } from './card/vds-card-wrap.component';
import { VdsGoBackDirective } from './directives/vds-go-back.directive';
import { VdsCanvasComponent } from './canvas/vds-canvas.component';
import { VdsConfirmComponent } from './confirm/vds-confirm.component';
import { VdsToggleComponent } from './toggle/vds-toggle.component';
import { VdsPaginatorComponent } from './paginator/vds-paginator.component';



@NgModule({
  declarations: [VdsAlertComponent, VdsNotifyComponent, VdsModalComponent, VadesNgkitAccordionComponent, VadesNgkitAccordionGroupComponent, VdsBlankStateComponent, VdsPageHeaderComponent, VdsDropdownComponent,VdsClickOutsideDirective, VadesNgkitTabComponent, VadesNgkitTabsetComponent, VadesNgkitTooltipComponent, VdsCardComponent, VdsCardWrapComponent,VdsGoBackDirective, VdsCanvasComponent,VdsConfirmComponent,VdsToggleComponent, VdsPaginatorComponent],
  imports: [
    CommonModule,
  ],
  exports: [VdsAlertComponent, VdsNotifyComponent, VdsModalComponent, VadesNgkitAccordionComponent, VadesNgkitAccordionGroupComponent, VdsBlankStateComponent, VdsPageHeaderComponent, VdsDropdownComponent, VdsClickOutsideDirective, VadesNgkitTabComponent, VadesNgkitTabsetComponent, VadesNgkitTooltipComponent,VdsCardComponent,VdsCardWrapComponent,VdsGoBackDirective, VdsCanvasComponent,VdsConfirmComponent,VdsToggleComponent,VdsPaginatorComponent]
})
export class VdsNgkitModule { }
