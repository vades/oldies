import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ApiService } from '@app/core/services/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class CrudsService {
  env = environment;
  baseUrl = this.env.api.cruds;
  
  constructor(
    private apiService: ApiService
  ) { }

  /**
   * Get a listing of the resource.
   */
  getAll() {
    return this.apiService.get(this.baseUrl);
  }

  /**
   * Get a listing by search query.
   */
  search(q?:any) {
    return this.apiService.get(this.baseUrl + '?q=' + q);
  }

  /**
   * Get the specified resource.
   */
  getItem(id: number) {
    return this.apiService.get(this.baseUrl + '/' + id);
  }

  /**
   * Store a newly created resource in storage.
   * @param data
   */
  post(data: object) {
    return this.apiService.post(this.baseUrl, data);
  }

  /**
   * Update the specified resource in storage.
   * @param id 
   */
  put(id: number, data: object) {
    return this.apiService.put(this.baseUrl + '/' + id, data);
  }

  /**
   * Remove the specified resource from storage.
   * @param id 
   */
  delete(id: number) {
    return this.apiService.delete(this.baseUrl + '/' + id);
  }
}
