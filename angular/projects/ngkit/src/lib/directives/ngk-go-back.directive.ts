import { Directive,HostListener } from '@angular/core';
import { Location } from '@angular/common';


@Directive({
  selector: '[ngkGoBack]'
})
export class NgkGoBackDirective {

  constructor(private location: Location) { }

    @HostListener('click')
    onClick() {
      this.location.back();
    }

}

