import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styles: []
})
export class Error404Component implements OnInit {
  alert: any = {
    show: true,
    type: 'is-danger',
    message: 'The page you are looking for cannot be found!',
  };

  constructor(
  ) {
    document.body.classList.add('error-404-page');
   }

  ngOnInit() {}
  
  ngOnDestroy(): void {
    document.body.classList.remove('error-404-page');
  }

}
