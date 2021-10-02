import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _baseUrl: string = 'https://jsonplaceholder.cypress.io/'

  constructor(private _http: HttpClient) {
  }

  listUsers(): Observable<any> {
    return this._http.get(this._baseUrl + 'users')
  }

  userDetail(id: string): Observable<any> {
    return this._http.get(`${this._baseUrl}users/${id}`)
  }

  addUser(sendValue: any): Observable<any> {
   return this._http.post(`${this._baseUrl}users`, sendValue)
  }

  deleteUser(id: any): Observable<any> {
    return this._http.delete(`${this._baseUrl}users/${id}`)
  }
}
