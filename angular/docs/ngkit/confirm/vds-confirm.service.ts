import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VdsConfirmService {

  private subject = new Subject<any>();

  confirm(message: string) {
    this.subject.next({ message: message });
  }

  getConfirm(): Observable<any> {
    return this.subject.asObservable();
  }

  dismiss() {
    this.subject.next();
  }
}
