import { Injectable } from '@angular/core';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = 'api_token';
  private name = 'user_name';

  constructor() { }
  
  setUser(token:string, name: string): any {
    localStorage.setItem(this.name,name);
    localStorage.setItem(this.token,token);
    return;
  }

  getApiToken(): any {
    return localStorage.getItem(this.token);
  }

  getUserName(): any {
    return localStorage.getItem(this.name);
  }

  isLoggedIn(): boolean {
    return this.getApiToken() !== null;
  }

  logOut(): any {
    localStorage.removeItem(this.name);
    localStorage.removeItem(this.token);
    return;
  }
 
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
