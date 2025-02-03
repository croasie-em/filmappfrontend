import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-user',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  registerForm: FormGroup;
  registrationSuccess: boolean = false;
  registrationError: string | null = null;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registerUser(): void {
    if (this.registerForm.valid) {
      const userData = {
        ...this.registerForm.value,
        role: 'USER', // Default role
        active: true  // Default active status
      };

      this.userService.registerUser(userData).subscribe({
        next: () => {
          this.registrationSuccess = true;
          this.registrationError = null;
          setTimeout(() => {
            this.router.navigate(['/login']); // Redirect to login page
          }, 2000);
        },
        error: err => {
          this.registrationError = 'Registration failed. Please try again.';
          console.error(err);
        }
      });
    }
  }

}
