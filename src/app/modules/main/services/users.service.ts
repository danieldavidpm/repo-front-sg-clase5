import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/responses/user.response';
import { UserRequest } from '../models/requests/user.request';

@Injectable()
export class UsersService {

  private readonly urlApi = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.urlApi}/users`)
  }

  addUser(user: UserRequest) {
    return this.http.post(`${this.urlApi}/users`, user);
  }

  updateUser(id: number, user: UserRequest) {
    return this.http.put(`${this.urlApi}/users/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.urlApi}/users/${id}`);
  }

  getUser(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.urlApi}/users/${id}`)
  }

  // getAppxUsu(id: number): Observable<Use
}
