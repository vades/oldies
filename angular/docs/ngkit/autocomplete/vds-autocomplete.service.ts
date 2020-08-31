import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ApiService } from '@app/core/services/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class VdsAutocompleteService {
  env = environment;
  apiUrl = this.env.api.cruds;

  constructor(
    private apiService: ApiService
  ) { }

  /**
   * Autocomplete switcher.
   */
  autocomplete(q: any, service?: string,params?: string) {
    params = (params ? '&' + params : '');
    console.log(params)
    //return this.apiService.get(this.apiUrl + '?q=' + q);
    switch (service) {
      case 'notifications':
        return this.searchNotifications(q,params);
        case 'products':
        return this.searchProducts(q,params);
        case 'devices':
        return this.searchDevices(q,params);
        case 'batteries':
        return this.searchBatteries(q,params);
       
      default:
        return this.searchCruds(q,params);
    }
  }

   /**
   * Get Notifications listing by search query.
   */
  searchNotifications(q: any,params?: string) {
    const query: string = [
      `q=${q}`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.env.api.notifications}/autocomplete?${query}`;
    return this.apiService.get(queryUrl);
  }

  /**
   * Get Products listing by search query.
   */
  searchProducts(q: any,params?: string) {
    const query: string = [
      `q=${q}`,
      `query_type=product`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.env.api.gatewayProducts}?${query}`;
    return this.apiService.get(queryUrl);
  }

   /**
   * Get Pdevice listing by search query.
   */
  searchDevices(q: any,params?: string) {
    let query: string = [
      `q=${q}`
    ].join('&');

    const queryUrl = `${this.env.api.gatewayDevices}?${query}${params}`;
    return this.apiService.get(queryUrl);
  }

   /**
   * Get battery listing by search query.
   */
  searchBatteries(q: any,params?: string) {
    let query: string = [
      `q=${q}`
    ].join('&');

    const queryUrl = `${this.env.api.gatewayDevices}?${query}${params}`;
    return this.apiService.get(queryUrl);
  }

  /**
   * Get CRUDS listing by search query.
   */
  searchCruds(q: any,params?: string) {
    const query: string = [
      `q=${q}`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.env.api.cruds}/autocomplete?${query}`;
    /* if(query.length < 2){
      return [];
    } */
    return this.apiService.get(queryUrl);
  }

}
