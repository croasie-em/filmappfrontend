import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Film {
  filmid: number;
  filmName: string;
  genre: string;
  description: string;
  rating: string;
  runTime: number;
}
@Injectable({
  providedIn: 'root'
})
export class AddFilmService {

  private baseUrl = '/films';

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.baseUrl);
  }

  addFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.baseUrl, film);
  }

  deleteFilm(filmid: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${filmid}`);
  }
}
