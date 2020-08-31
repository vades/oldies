/**
 * TODO: create configurable from out: timeout, inverse, position
 * TODO: Resolve how to destroy notification onDestroy or view change: https://stackoverflow.com/questions/50674239/how-to-detect-when-route-changed-and-new-view-replaced-in-angular
 */
import { Component, OnInit, Input  } from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, transition, animate, style } from '@angular/animations';

import { VdsNotifyService } from './vds-notify.service';

@Component({
  selector: 'vds-notify',
  template: `
  <section *ngIf="notify" [@slideIn] [ngClass]="'notify ' + (inverse ? 'inverse ' : '')  + notify.status + ' ' + classList" [class.inverse]="inverse" (click)="clearNotify()" (vdsClickOutside)="clearNotify($event)">
  <div>{{notify.message}}</div>
  <span class="close">&times;</span>
  </section>
  `,
  styleUrls: ['./vds-notify.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ])
    ])
  ]

})
export class VdsNotifyComponent implements OnInit {
  @Input() classList: string = '';
  @Input() inverse: boolean = false;

  notify: any;
  notifySubscription: Subscription;
  timeout: any;

  public constructor(
    private notifyService: VdsNotifyService
  ) {
    // subscribe to component notify
    this.notifySubscription = this.notifyService.getNotify().subscribe(notify => { this.notify = notify; });
   
  }

  ngOnInit() {
    // Unsubscribe and clear notify after given timeout

    //TODO: Resolve how to pass time interval as param
    this.timeout = setTimeout(()=> {
      console.log(' setTimeout');
     this.clearNotify();
    }, 10000);
  }

  clearNotify(){
    clearTimeout(this.timeout);
    this.notifyService.clearNotify();
  }
  /**
   * Does not work
   */
   /* ngOnDestroy() {
   this.notifyService.clearNotify();
    this.notifySubscription.unsubscribe(); 
  }*/

}
