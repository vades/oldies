import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '@env/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit, AfterContentChecked {
  env = environment;
  title = this.env.appName;
  partials: any = {};
  subscriptions: any = {};

  public constructor(
    private titleService: Title,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.env.appName);
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
