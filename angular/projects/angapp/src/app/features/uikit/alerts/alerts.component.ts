import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styles: []
})
export class AlertsComponent implements OnInit {

  title = 'Alerts';
  public constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
