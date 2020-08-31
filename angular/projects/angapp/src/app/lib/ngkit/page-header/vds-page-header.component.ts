import { Component,  Input } from '@angular/core';

@Component({
  selector: 'vds-page-header',
  template: `
  <section class="page-header">
  <h1>{{title}}</h1>
  <ng-content></ng-content>
 </section>
  `,
  styleUrls: ['./vds-page-header.component.scss']
})
export class VdsPageHeaderComponent{
  @Input('classList') classList: string = '';
  @Input() title: string;

}
