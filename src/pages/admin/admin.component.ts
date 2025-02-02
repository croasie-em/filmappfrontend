import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'password') {
      localStorage.setItem('token', 'fake-token'); // Storing a fake token for session
      localStorage.setItem('username', this.username);
      this.router.navigate(['/admin-dashboard']); // Redirect to the dashboard
    } else {
      this.errorMessage = 'Invalid credentials. Try again.';
    }
  }

}
