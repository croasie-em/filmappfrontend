import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private baseUrl = '/users';

  constructor(private http: HttpClient) { }

  login(loginRequest: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginRequest);
  }
}
