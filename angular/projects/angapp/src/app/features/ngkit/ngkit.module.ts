import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgkitRoutingModule } from './ngkit-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalComponent } from './modal/modal.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TabComponent } from './tab/tab.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { AlertComponent } from './alert/alert.component';
import { BlankStateComponent } from './blank-state/blank-state.component';
import { NotifyComponent } from './notify/notify.component';
import { VdsNgkitModule } from '@app/lib/vades-ngkit';
import { EscapeHtmlPipe } from '@app/shared/pipes/escape-html.pipe';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [AccordionComponent, ModalComponent, DropdownComponent, TabComponent, TooltipComponent, AlertComponent, BlankStateComponent, NotifyComponent,EscapeHtmlPipe, ConfirmComponent],
  imports: [
    CommonModule,
    NgkitRoutingModule,
    VdsNgkitModule
  ]
})
export class NgkitModule { }
