import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { NgkAlertifyService } from './ngk-alertify.service';
import { slideFromBottomAnimation  } from '../../animations/';

@Component({
  selector: 'ngk-alertify',
  templateUrl: './ngk-alertify.component.html',
  styleUrls: ['./ngk-alertify.component.scss'],
  animations: [slideFromBottomAnimation ]
})
export class NgkAlertifyComponent implements OnInit {

  @Input() classList: string = '';
  @Input() inverse: boolean = false;

  alertify: any;
  alertifySubscription: Subscription;
  timeout: any;

  public constructor(
    private ngkAlertifyService: NgkAlertifyService
  ) {
    this.alertifySubscription = this.ngkAlertifyService.get().subscribe(alertify => {
      this.alertify = alertify;
      //TODO: Resolve how to pass time interval as param
      // Unsubscribe and clear alertify after given timeout
      this.timeout = setTimeout(() => {
        this.clearAlertify();
      }, 15000);
    });

  }

  ngOnInit() { }

  /**
   * Clear alertify and timeout
   */
  clearAlertify(): void {
    this.ngkAlertifyService.clear();
    clearTimeout(this.timeout);
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this.alertifySubscription.unsubscribe();
  }

}
