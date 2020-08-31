import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgkAlertifyService {
  private subject = new Subject<any>();

  show(message: string, status?: string) {
    this.subject.next({ message: message, status: status });
  }

  get(): Observable<any> {
    return this.subject.asObservable();
  }

  clear() {
    this.subject.next();
  }
}
