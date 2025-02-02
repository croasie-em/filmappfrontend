import { Component, OnInit } from '@angular/core';
import { ViewBookingsService, Booking } from '../view-bookings.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-bookings',
  imports: [CommonModule, FormsModule],
  templateUrl: './view-bookings.component.html',
  styleUrl: './view-bookings.component.css'
})
export class ViewBookingsComponent implements OnInit {

  bookings: Booking[] = [];

  constructor(private bookingService: ViewBookingsService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.bookingService.getBookings().subscribe(data => {
      this.bookings = data;
    });
  }

}
