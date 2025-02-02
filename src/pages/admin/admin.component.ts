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

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = { username: this.username, password: this.password };
    this.http.post('/api/auth/login', loginData).subscribe({
      next: (response: any) => {
        if (response.role === 'admin') {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.errorMessage = 'Access denied! Admins only.';
        }
      },
      error: () => {
        this.errorMessage = 'Invalid credentials. Try again.';
      }
    });
  }

}
