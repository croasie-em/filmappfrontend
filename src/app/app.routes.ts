import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CinemasComponent } from '../pages/cinemas/cinemas.component';
import { FilmsComponent } from '../pages/films/films.component';
import { BookingsComponent } from '../pages/bookings/bookings.component';
import { AdminComponent } from '../pages/admin/admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cinemas', component: CinemasComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'bookings', component: BookingsComponent},
    { path: 'admin', component: AdminComponent}
//     { path: 'booking', loadComponent: () => import('../pages/booking/booking.component').then(m => m.BookingComponent) },
//     { path: 'login', loadComponent: () => import('../pages/login/login.component').then(m => m.LoginComponent) },
//     { path: 'admin', loadComponent: () => import('../pages/admin/admin.component').then(m => m.AdminComponent) }
  ];