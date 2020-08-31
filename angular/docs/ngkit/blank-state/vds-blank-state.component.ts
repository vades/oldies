import { Component, Input } from '@angular/core';

@Component({
  selector: 'vds-blank-state',
  template: `
  <section [ngClass]="'blank-state ' + classList">
  <ng-content select="[icon]"></ng-content>
  <header>{{message}}</header>
 <ng-content select="[content]"></ng-content>
  </section>
  `,
  styleUrls: ['./vds-blank-state.component.scss']
})
export class VdsBlankStateComponent{

  @Input('classList') classList: string = '';
  @Input('message') message: string = '';

}
