import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginService } from '../user-login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  loginError: string | null = null;
  loginSuccess: string | null = null;

  constructor(private fb: FormBuilder, private userService: UserLoginService, private router: Router) {
    // Create the login form group
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    this.userService.login({ username, password }).subscribe({
      next: (response) => {
        this.loginSuccess = 'Login successful! Redirecting...to home';
        
        setTimeout(() => {
          this.router.navigate(['/']); // Navigate to home page
        }, 2000); // Wait 2 seconds before redirect
      },
      error: (error) => {
        
        this.loginError = 'Invalid username or password';
      },
    });
  }

}
