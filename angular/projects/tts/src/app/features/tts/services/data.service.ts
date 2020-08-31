import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<any>();

  private data: any = {};

  set(data: any) {
    this.subject.next(data);
  }

  get(): Observable<any> {
    return this.subject.asObservable();
  }

  clear() {
    this.subject.next();
  }
}
