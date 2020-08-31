import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgkConfirmService {

  private subject = new Subject<any>();

  confirm(message: string,data: any = {}) {
    this.subject.next({ message: message, data: data });
  }

  getConfirm(): Observable<any> {
    return this.subject.asObservable();
  }

  dismiss() {
    this.subject.next();
  }
}
