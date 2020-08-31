import { Component, OnInit, Input } from '@angular/core';

import { NgkNewsletterService } from "./ngk-newsletter.service";

@Component({
  selector: 'ngk-newsletter',
  templateUrl: './ngk-newsletter.component.html',
  styleUrls: ['./ngk-newsletter.component.scss']
})
export class NgkNewsletterComponent implements OnInit {
  @Input() classList: string = '';

  model: any = {};
  subscriptions: any = {};
  status: string;

  constructor(
    private ngkNewsletterService: NgkNewsletterService
  ) {
    this.subscriptions.newsletter = this.ngkNewsletterService.getStatus().subscribe(
      response => { this.setStatus(response); });
  }

  ngOnInit() {
  }

  /**
   * Store a newly created resource in storage.
   */
  postData() {
    this.ngkNewsletterService.setData(this.model);
  }

  /**
   * Set status
   * @param status 
   */
  setStatus(status: string) {
    this.status = status;
    if (status == 'success') {
      this.model.email = '';
    }
  }

  /**
  * On destroy
  */
  ngOnDestroy() {
    for (let i in this.subscriptions) {
      this.subscriptions[i].unsubscribe();
    }
  }

}
