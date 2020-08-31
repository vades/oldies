import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VdsNotifyService {
  private subject = new Subject<any>();

  sendNotify(message: string, status?: string) {
    this.subject.next({ message: message, status: status });
  }

  getNotify(): Observable<any> {
    return this.subject.asObservable();
  }

  clearNotify() {
    this.subject.next();
  }
}
