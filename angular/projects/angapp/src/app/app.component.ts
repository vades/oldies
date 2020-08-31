import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '@env/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  env = environment;
  title = 'Dashboard';
   public constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.env.appName);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle + this.env.appName);
  }
}
