import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VdsAlertService {
  private subject = new Subject<any>();

  sendAlert(message: string, status?: string,text?: string) {
    this.subject.next({ message: message, status: status,text: text });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  clearAlert() {
    this.subject.next();
  }
}
