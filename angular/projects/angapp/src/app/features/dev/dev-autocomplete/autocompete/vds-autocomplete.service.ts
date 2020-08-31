import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ApiService } from '@app/core/services/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class VdsAutocompleteService {
  env = environment;
  baseUrl = this.env.api.cruds;
  
  constructor(
    private apiService: ApiService
  ) { }

  /**
   * Search switcher.
   */
  search(service: string, q?:any) {
   
    //return this.apiService.get(this.baseUrl + '?q=' + q);
    switch(service){
      case 'cruds':
        return this.searchCruds(q);

      default:
        return this.searchCruds(q);
    }
  }

  /**
   * Get CRUDS listing by search query.
   */
  searchCruds(q?:any) {
    return this.apiService.get(this.baseUrl + '?q=' + q);
  }

}
