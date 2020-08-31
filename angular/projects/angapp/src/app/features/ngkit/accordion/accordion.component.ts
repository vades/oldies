import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styles: []
})
export class AccordionComponent implements OnInit {
  title = 'Accordion';
  constructor(
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
