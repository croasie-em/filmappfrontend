import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  adminName = localStorage.getItem('username') || 'Admin';

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/'; // Redirect to home after logout
  }

}
