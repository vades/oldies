/**  
 * Source: http://training.fabiobiondi.io/2017/07/10/create-an-accordion-component-in-angular-parent-children-communication/
 * https://stackblitz.com/edit/angular-component-accordion-example?file=app%2Fcomponents%2Faccordion%2Faccordion-group.component.ts
 **/
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'vds-accordion',
  template: `
  <article class="accordion" [ngClass]="classList">
  <header [attr.aria-expanded]="expanded" (click)="toggle.emit()">
    {{title}}
  </header>
  <div class="body" *ngIf="expanded"><ng-content></ng-content></div>
   </article>
  `,
  styleUrls: ['./vades-ngkit-accordion.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(-50%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ])
    ])
  ]
})
export class VadesNgkitAccordionComponent {
  @Input() classList: string = '';
  @Input() expanded = false;
  @Input() title: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

}
