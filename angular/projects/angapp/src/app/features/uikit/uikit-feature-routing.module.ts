import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';

const routes: Routes = [
  { path: 'alerts', component: AlertsComponent },
  { path: '**', loadChildren: '@app/core/error404/error404.module#Error404Module' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UikitFeatureRoutingModule { }
