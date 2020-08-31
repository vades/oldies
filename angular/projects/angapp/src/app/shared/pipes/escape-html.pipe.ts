/**
 * Source: https://medium.com/@AAlakkad/angular-2-display-html-without-sanitizing-filtering-17499024b079
 */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'escapeHtml'
})
export class EscapeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
