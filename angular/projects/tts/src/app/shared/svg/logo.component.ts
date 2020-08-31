import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="angular" class="app-logo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
  `,
  styles: []
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
