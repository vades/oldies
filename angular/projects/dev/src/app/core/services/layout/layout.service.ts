/**
 * Handle page layouts
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private subject = new Subject<any>();
  private partials: any = {};

 getLayout(): Observable<any> {
    return this.subject.asObservable();
  }

  clearLayout() {
    this.subject.next();
  }

  showPartials(){
    this.showHeader();
    this.showFooter();
    this.showSidebarLeft();
    this.showSidebarRight();
  }

  hidePartials(){
    this.hideHeader();
    this.hideFooter();
    this.hideSidebarLeft();
    this.hideSidebarRight();
  }
  togglePartials(){
    this.toggleHeader();
    this.toggleFooter();
    this.toggleSidebarLeft();
    this.toggleSidebarRight();
  }

   /**
   * Header
   */
  showHeader(){
    this.partials.header = true;
    this.subject.next(this.partials);
  }
  hideHeader(){
    this.partials.header = false;
    this.subject.next(this.partials);
  }
  toggleHeader(){
    this.partials.header = !this.partials.header;
    this.subject.next(this.partials);
  }

 
   /**
   * Footer
   */
  showFooter(){
    this.partials.footer = true;
    this.subject.next(this.partials);
  }
  hideFooter(){
    this.partials.footer = false;
    this.subject.next(this.partials);
  }
  toggleFooter(){
    this.partials.footer = !this.partials.footer;
    this.subject.next(this.partials);
  }

   /**
   * Sidebar left
   */
  showSidebarLeft(){
    this.partials.sidebarLeft = true;
    this.subject.next(this.partials);
  }
  hideSidebarLeft(){
    this.partials.sidebarLeft = false;
    this.subject.next(this.partials);
  }
  toggleSidebarLeft(){
    this.partials.sidebarLeft = !this.partials.sidebarLeft;
    this.subject.next(this.partials);
  }
  
  /**
   * Sidebar right
   */
  showSidebarRight(){
    this.partials.sidebarRight = true;
    this.subject.next(this.partials);
  }
  hideSidebarRight(){
    this.partials.sidebarRight = false;
    this.subject.next(this.partials);
  }
  toggleSidebarRight(){
    this.partials.sidebarRight = !this.partials.sidebarRight;
    this.subject.next(this.partials);
  }

}
