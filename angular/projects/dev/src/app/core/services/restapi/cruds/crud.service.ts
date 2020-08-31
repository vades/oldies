import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Crud } from "./crud.model";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  env = environment;
  rootEndpoint = this.env.rootEndpoint;
  endpoint = this.env.endpoints.cruds;

  constructor(
    protected httpClient: HttpClient
  ) { }

  readAll(): Observable<Crud[]> {
    return this.httpClient.get(this.env.rootEndpoint + this.endpoint)
      .pipe(
        map((response: any[])  => response.map(Crud.adapt))
      );
  }
}
