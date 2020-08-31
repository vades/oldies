import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsideService {

  private subject = new Subject<any>();

  setAside(expanded: boolean) {
    this.subject.next(expanded);
  }

  getAside(): Observable<any> {
    return this.subject.asObservable();
  }

  clearAside() {
    this.subject.next();
  }
}
