import { Component, OnInit } from '@angular/core';

import { NgkAlertifyService } from '@ngk/components/alertify/ngk-alertify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  subscriptions: any = {};
  newsletterStatus: string;

  data: object = {};

  constructor(
    private ngkAlertifyService: NgkAlertifyService
  ) {}

  ngOnInit() {}

  showAlertify(): void {
    //this.newsletterStatus = 'process';
    this.ngkAlertifyService.show('This is an alert  message', 'is-success');
  }

}
