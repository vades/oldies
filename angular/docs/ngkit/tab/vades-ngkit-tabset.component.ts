import { Component, AfterContentInit,  QueryList, ContentChildren,Input } from '@angular/core';

import { VadesNgkitTabComponent } from './vades-ngkit-tab.component';

@Component({
  selector: 'vds-tabset',
  template: `
  <ul role="tablist" [ngClass]="classList">
  <li role="tab" *ngFor="let tab of tabs"
  [attr.aria-selected]="tab.active"
  
  [class.active]="tab.active"
  (click)="setActive(tab)">
  <a>{{ tab.title }}</a>
  </li>
</ul>
<ng-content></ng-content>
  `,
  styleUrls: ['./vades-ngkit-tabset.component.scss']
})
export class VadesNgkitTabsetComponent {
  @Input() classList: string = '';
  @ContentChildren(VadesNgkitTabComponent) tabs: QueryList<VadesNgkitTabComponent>;

  ngAfterContentInit(): void {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: VadesNgkitTabComponent): void {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }
  constructor() { }

 
}
