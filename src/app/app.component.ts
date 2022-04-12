import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CutieFood';
  isLoggedIn: boolean;
  constructor(private authService: AuthService) {}

  get userLoggedIn(): boolean {
    return localStorage.getItem('user') === null;
  }

  ngOnInit() {
    if (this.authService.loggedInUser === null) {
      this.authService.logout();
    }
  }
}
