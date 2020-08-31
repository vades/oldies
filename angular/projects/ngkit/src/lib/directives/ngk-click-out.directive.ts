/**
 * Source: https://christianliebel.com/2016/05/angular-2-a-simple-click-outside-directive/
 */
import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[ngkClickOut]'
})
export class NgkClickOutDirective {


  constructor(
    private elementRef: ElementRef
  ) {
  }

  @Output()
  public ngkClickOut = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {

    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.ngkClickOut.emit(event);
    }
  }

}
