import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cinema {
  cinemaid: number;
  cinemaName: string;
  city: string;
  numberOfScreens: string;
}

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  private baseUrl = '/cinemas';

  constructor(private http: HttpClient) {}

  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.baseUrl);
  }

  addCinema(cinema: Cinema): Observable<Cinema> {
    return this.http.post<Cinema>(this.baseUrl, cinema);
  }

  updateCinema(id: number, cinema: Cinema): Observable<Cinema> {
    return this.http.put<Cinema>(`${this.baseUrl}/${id}`, cinema);
  }

  deleteCinema(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
