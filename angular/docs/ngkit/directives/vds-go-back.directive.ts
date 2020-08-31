import { Directive,HostListener } from '@angular/core';
import { Location } from '@angular/common';


@Directive({
  selector: '[vdsGoBack]'
})
export class VdsGoBackDirective {

  constructor(private location: Location) { }

    @HostListener('click')
    onClick() {
      this.location.back();
    }

}
