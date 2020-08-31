import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VdsAlertService } from '@app/lib/vades-ngkit/alert/vds-alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: []
})
export class AlertComponent implements OnInit {
  title = 'Alert';
  constructor(
    private titleService: Title,
    private alertService: VdsAlertService,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  sendAlert(): void {
    // send alert to subscribers via observable subject
    this.alertService.sendAlert('Send alert to subscribers via observable subject', 'is-info');
  }

  ngOnDestroy() {
    this.alertService.clearAlert();
  }

}
