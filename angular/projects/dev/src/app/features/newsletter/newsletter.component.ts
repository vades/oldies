import { Component, OnInit } from '@angular/core';

import { NgkNewsletterService } from "@ngk/components/newsletter/ngk-newsletter.service";
import { NewsletterService } from '@app/core/services/restapi/newsletter/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styles: []
})
export class NewsletterComponent implements OnInit {
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
    setTimeout (() => {
      console.info(data);
    this.subscriptions.newsletterService = this.newsletterService.create(data).subscribe((response: any[]) => {
      console.log(response);
      //this.ngkNewsletterService.setStatus('success');
      //this.ngkNewsletterService.clearStatus();
      this.ngkNewsletterService.setStatus('success');
      this.toggleAlert();
    },error => {
      this.ngkNewsletterService.setStatus('error');
    });
   }, 3000);
    //this.newsletterStatus = 'process';
    //this.toggleAlert();
    
   
   /*  setTimeout(() => {
     
    }, 3000); */
  }

  toggleAlert(): void {
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
