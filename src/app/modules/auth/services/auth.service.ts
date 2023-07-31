import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/requests/login.request';

@Injectable()
export class AuthService {

  //private readonly API_URL = 'https://localhost:7009/api/';  
  private readonly API_URL = 'https://wa-api-users-sg.azurewebsites.net/api/';  
  constructor(private http: HttpClient) { }

  login(data: LoginRequest) {
    //return this.http.post(`${this.API_URL}auth/login`, data);
    return this.http.post(`${this.API_URL}Login/Authenticate`, data);
  }

  getIp() {
    return this.http.get('https://api.ipify.org/?format=json');
  }
  
}
