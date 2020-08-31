import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  @Input() env: any = {};
  public year = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
