import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VdsNotifyService } from '@app/lib/vades-ngkit/notify/vds-notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styles: []
})
export class NotifyComponent implements OnInit {
  title = 'Notify';
  constructor(
    private titleService: Title,
    private notifyService: VdsNotifyService,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  sendNotify(): void {
    // send notification to subscribers via observable subject
    this.notifyService.sendNotify('Send notification to subscribers via observable subject', 'is-info');
  }

  ngOnDestroy() {
    this.notifyService.clearNotify();
  }

}
