import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _baseUrl: string = 'https://jsonplaceholder.cypress.io/'

  constructor(private _http: HttpClient) {
  }

  listUsers(): Observable<User[]> {
    return this._http.get<User[]>(this._baseUrl + 'users')
  }

  userDetail(id: string): Observable<User> {
    return this._http.get<User>(`${this._baseUrl}users/${id}`)
  }

  addUser(sendValue: any): Observable<any> {
   return this._http.post(`${this._baseUrl}users`, sendValue)
  }

  editUser(id: any, sendValue: any): Observable<any> {
    return this._http.patch(`${this._baseUrl}users/${id}`, sendValue)
  }

  deleteUser(id: any): Observable<any> {
    return this._http.delete(`${this._baseUrl}users/${id}`)
  }
}
