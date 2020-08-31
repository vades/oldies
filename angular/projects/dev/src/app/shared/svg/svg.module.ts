import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDangerComponent } from './svg-danger.component';
import { SvgWarningComponent } from './svg-warning.component';
import { SvgInfoComponent } from './svg-info.component';
import { SvgSuccessComponent } from './svg-success.component';

@NgModule({
  declarations: [SvgDangerComponent, SvgWarningComponent, SvgInfoComponent, SvgSuccessComponent],
  imports: [
    CommonModule
  ],
  exports: [SvgDangerComponent, SvgWarningComponent, SvgInfoComponent, SvgSuccessComponent]
})
export class SvgModule { }
