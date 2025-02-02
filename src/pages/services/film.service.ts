import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = '/films';

  constructor(private http: HttpClient) { }

  searchFilms(title: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search?title=${title}`);
  }

  getAllFilms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
