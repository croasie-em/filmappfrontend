import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface User {
  userid?: number;
  fullName: string;
  email: string;
  username: string;
  password: string;
  role?: string;
  active?: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/users';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }
}
