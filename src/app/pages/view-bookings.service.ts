import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Booking {
  bookingId: number;
  filmId: number;
  cinemaId: number;
  userId: number;
  bookingDate: number;
}
@Injectable({
  providedIn: 'root'
})
export class ViewBookingsService {

  private baseUrl = '/bookings';

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.baseUrl);
  }
}
