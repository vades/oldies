import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  env = environment;
  rootEndpoint = this.env.rootEndpoint;
  endpoint = this.env.endpoints.newsletter;

  constructor(
    protected httpClient: HttpClient
  ) { }
  
  /**
   * Post data
   *  @param data 
   */
  create(data: any): Observable<any> {
    return this.httpClient.post(this.rootEndpoint + this.endpoint, data)
      .pipe(
        map((response: any[])  => response)
      );
  }
}
