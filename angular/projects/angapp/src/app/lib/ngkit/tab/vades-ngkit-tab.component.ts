import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vds-tab',
  template: `
  <section  role="tabpanel"  [ngClass]="classList" [attr.aria-hidden]="!active">
    <ng-content></ng-content>
  </section>
  `,
  styleUrls: ['./vades-ngkit-tab.component.scss'],
})
export class VadesNgkitTabComponent implements OnInit {
  @Input() title: string;
  @Input() classList: string = '';
  active = false;
  constructor() { }

  ngOnInit() {
  }

}
