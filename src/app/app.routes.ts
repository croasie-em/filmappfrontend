import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CinemasComponent } from '../pages/cinemas/cinemas.component';
import { FilmsComponent } from '../pages/films/films.component';
import { BookingsComponent } from '../pages/bookings/bookings.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AddCinemaComponent } from './add-cinema/add-cinema.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { ViewBookingsComponent } from './pages/view-bookings/view-bookings.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cinemas', component: CinemasComponent },
    { path: 'films', component: FilmsComponent },
    { path: 'bookings', component: BookingsComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'admin-dashboard', component: AdminDashboardComponent },
    { path: 'admin-dashboard/add-cinema', component: AddCinemaComponent },
    { path: 'admin-dashboard/add-film', component: AddFilmComponent },
    { path: 'admin-dashboard/view-bookings', component: ViewBookingsComponent }

  ];


  