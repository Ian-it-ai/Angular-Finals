import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerEmail: string | undefined;
  registerPassword: string | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuthState().subscribe((user: any) => {
      if (user) {
        this.router.navigate(['/add-account']);
      }
    });
  }
  register() {
    if (this.registerEmail && this.registerPassword) {
      this.authService.register(this.registerEmail, this.registerPassword)
        .then((result: any) => {
          console.log('User registered');
          console.log(result.user); // This will log the result of the registration
          window.alert('Registered successfully'); // This will display the alert
          this.registerEmail = '';
          this.registerPassword = '';
          this.router.navigate(['/login']); // navigate to login page
        }).catch((error: any) => {
          console.error(error);
          window.alert('Registration failed'); // This will display the alert
        });
    } else {
      window.alert('Please enter email and password'); // This will display the alert
    }
  }
}
