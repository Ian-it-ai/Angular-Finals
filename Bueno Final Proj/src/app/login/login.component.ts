import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router'; // Add this import at the top
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { } 


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }
  onLogin() {
    if (!this.loginForm.valid) {
        return;
    }
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');
    if (emailControl && passwordControl) {
        const email = emailControl.value;
        const password = passwordControl.value;
        this.authService.login(email, password).then(() => {
            window.alert('Login successful'); // Add this line to show a popup message
            this.router.navigate(['/post-list']); // Add this line to navigate to the welcome page
        }).catch(error => {
            // Handle the error
        });
    }
};
}
