import { Component, OnInit } from '@angular/core';

import { NgkNewsletterService } from "@ngk/components/newsletter/ngk-newsletter.service";
import { NewsletterService } from '@app/core/services/restapi/newsletter/newsletter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  alert: any = {
    show: false,
    type: '',
    message: '',
  };

  subscriptions: any = {};
  newsletterStatus: string;

  data: object = {};

  constructor(
    private ngkNewsletterService: NgkNewsletterService,
    private newsletterService: NewsletterService
  ) { 
    this.subscriptions.ngkNewsletterService = this.ngkNewsletterService.getData().subscribe(
      data => { this.submitNewsletter(data); });
  }

  ngOnInit() {}

  submitNewsletter(data: any): void {
    this.ngkNewsletterService.setStatus('process');
    this.subscriptions.newsletterService = this.newsletterService.create(data).subscribe((response: any[]) => {
      this.ngkNewsletterService.setStatus('success');
      this.toggleAlert();
    },error => {
      this.ngkNewsletterService.setStatus('error');
    })
  }

  toggleAlert(): void {
    this.ngkNewsletterService.clearStatus();
    this.alert =  {
      show: !this.alert.show,
      type: 'is-success',
      message: 'This is an alert message',
    };
    
  }

  refresh(): void {
    window.location.reload();
}

  /**
  * On destroy
  */
  ngOnDestroy(): void {
    for (let i in this.subscriptions) {
      this.subscriptions[i].unsubscribe();
    }
  }

}
