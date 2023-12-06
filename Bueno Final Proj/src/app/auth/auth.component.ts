import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginEmail: any;
  loginPassword: any;
  registerEmail: any;
  registerPassword: any;

  constructor(private authService: AuthService) { }

  login(email: string, password: string) {
    this.authService.login(email, password)
      .then((result) => {
        console.log('User logged in');
      }).catch((error) => {
        console.error(error);
      });
  }

  register(email: string, password: string) {
    this.authService.register(email, password)
      .then((result) => {
        console.log('User registered');
      }).catch((error) => {
        console.error(error);
      });
  }
}
// 