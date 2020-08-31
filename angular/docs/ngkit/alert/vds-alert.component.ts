import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, transition, animate, style } from '@angular/animations';

import { VdsAlertService } from './vds-alert.service';


@Component({
  selector: 'vds-alert',
  template: `
  <section *ngIf="show" [ngClass]="'alert is-' + type + ' ' + classList" (click)="clearAlert()">
  <i class="icon"></i>
  <header>{{message}}</header>
  <article><ng-content></ng-content></article>
  </section>
  `,
  styleUrls: ['./vds-alert.component.scss'],
})
export class VdsAlertComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() type: string = '';
  @Input() message: string = '';
  @Input() classList: string = '';

  public constructor() {

  }

  ngOnInit() {
  }

  // clear alert
  clearAlert(): void {
    this.show = false;
  }

}
