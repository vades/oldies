import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';    

@Injectable({
  providedIn: 'root'
})
export class NgkNewsletterService {

  private subject = new Subject<any>();
  private subjectStatus = new Subject<any>();

  constructor() { }

  setData(data: any) {
    this.subject.next(data);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

  clearData() {
    this.subject.next();
  } 
  
  setStatus(status: string) {
    this.subjectStatus.next(status);
  }

  getStatus(): Observable<any> {
    return  this.subjectStatus.asObservable();
  }

  clearStatus() {
    this.subjectStatus.next();
  } 
}
