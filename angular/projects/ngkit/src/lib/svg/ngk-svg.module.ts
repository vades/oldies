import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgkSvgError404Component } from './ngk-svg-error404.component';
import { NgkSvgDangerComponent } from './ngk-svg-danger.component';
import { NgkSvgWarningComponent } from './ngk-svg-warning.component';
import { NgkSvgInfoComponent } from './ngk-svg-info.component';
import { NgkSvgSuccessComponent } from './ngk-svg-success.component';



@NgModule({
  declarations: [NgkSvgError404Component, NgkSvgDangerComponent, NgkSvgWarningComponent, NgkSvgInfoComponent, NgkSvgSuccessComponent],
  imports: [
    CommonModule
  ],
  exports: [NgkSvgError404Component, NgkSvgDangerComponent, NgkSvgWarningComponent, NgkSvgInfoComponent, NgkSvgSuccessComponent]
})
export class NgkSvgModule { }
