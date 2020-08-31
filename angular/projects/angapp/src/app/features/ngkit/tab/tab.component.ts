import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styles: []
})
export class TabComponent implements OnInit {
  title = 'Tab';
  tabs: any;
  constructor(
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.tabs = [
      { title: 'About', content: 'This is the About tab' },
      { title: 'Blog', content: 'This is our blog' },
      { title: 'Contact us', content: 'Contact us here' },
    ];
  }

}
