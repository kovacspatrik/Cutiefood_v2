import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
} from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CutieFood';
  isLoggedIn: boolean;
  constructor(private authService: AuthService) {
    //console.log(this.noLoggedInUser());
  }

  ngOnInit() {
    if (this.authService.loggedInUser === null) {
      this.authService.logout();
    }
  }
}
