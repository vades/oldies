import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalComponent } from './modal/modal.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TabComponent } from './tab/tab.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { AlertComponent } from './alert/alert.component';
import { BlankStateComponent } from './blank-state/blank-state.component';
import { NotifyComponent } from './notify/notify.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  { path: 'blank', component: BlankStateComponent },
  { path: 'accordion', component:  AccordionComponent},
  { path: 'modal', component:  ModalComponent },
  { path: 'confirm', component:  ConfirmComponent },
  { path: 'dropdown', component:  DropdownComponent},
  { path: 'tab', component:  TabComponent},
  { path: 'tooltip', component:  TooltipComponent},
  { path: 'alert', component: AlertComponent},
  { path: 'notify', component:  NotifyComponent},
  { path: '**', loadChildren: '@app/core/error404/error404.module#Error404Module' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgkitRoutingModule { }
