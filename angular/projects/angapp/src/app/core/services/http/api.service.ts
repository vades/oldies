import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Cruds } from '@app/features/cruds/cruds.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiEndPoint = environment.apiEndPoint;
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  private httpOptions = {
    headers: this.headers
  };

  /*  private opt = new RequestOptions({
     headers: this.headers
   }); */
  constructor(
    protected http: HttpClient,
  ) { }

  list(): Observable<Cruds[]> {
    const url = this.apiEndPoint +'cruds';
    return this.http.get(url).pipe(
      map((data: any[]) => data.map((item: any) => new Cruds(
        item.id,
        item.title,
        item.name,
      ))),
    );
  }

  /**
   * Get data
   * @param url 
   * @param options 
   */
  get(url: string, options?): Observable<ArrayBuffer> {
    const apiUrl = this.apiEndPoint + url;
    console.log('ApiService GET request: ' + apiUrl);
    return this.http.get(apiUrl, options) 
    .pipe(
      map(response => response)
      );
  }
  /**
   * Post data
   * @param url 
   * @param options 
   */
  post(url: string, data: object = {}): Observable<any> {
    const apiUrl = this.apiEndPoint + url;
    console.log('ApiService POST request: ' + apiUrl);
    return this.http.post(apiUrl, JSON.stringify(data), this.httpOptions)
    .pipe(
      map(response => response)
      );
  }
  /**
   * Put data
   * @param url 
   * @param data 
   */
  put(url: string, data: Object = {}): Observable<any> {
    const apiUrl = this.apiEndPoint + url;
    console.log('ApiService PUT request: ' + apiUrl);
    return this.http
      .put(apiUrl, JSON.stringify(data), this.httpOptions)
      .pipe(
        map(response => response)
        );
  }

  /**
 * Delete data
 * @param url 
 * @param data 
 */
  delete(url: string): Observable<any> {
    const apiUrl = this.apiEndPoint + url;
    console.log('ApiService DELETE request: ' + apiUrl);
    return this.http
      .delete(apiUrl)
      .pipe(
        map(response => response)
        );
  }
  /**
   * TODO: Deprecated - errors are hndled in the Error Interceptor
   * Error handler
   * @param error 
   */
  handleError(error: Response | any) {
    console.error(error.message || error);
    return throwError(error.status);
  }
}
