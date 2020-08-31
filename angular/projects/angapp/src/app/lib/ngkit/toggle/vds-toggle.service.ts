import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VdsToggleService {
  private source = new Subject<any>();
  stream = this.source.asObservable();

  constructor() { }

  changeValue(value: boolean) {
    this.source.next(value)
  }
}
