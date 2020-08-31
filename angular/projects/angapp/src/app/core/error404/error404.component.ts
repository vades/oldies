import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
  <section class="error404">
  <i class="fas fa-sad-tear fa-5x"></i>
  <header>{{message}}</header>
 
  </section>
  `,
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
  public message: string = 'The page you are looking for cannot be found!';

  constructor() { }

  ngOnInit() {
  }

}
