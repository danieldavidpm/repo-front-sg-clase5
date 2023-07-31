import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setDataLogin(data: any) {
    localStorage.setItem('token_clase5', data.token);
    localStorage.setItem('refreshToken_clase5', data.refreshToken);
  }

  clearDataLogin() {
    localStorage.clear();
  }
  
}
