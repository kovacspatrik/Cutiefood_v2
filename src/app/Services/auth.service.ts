import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedInUser: User = null;
  isLoggedIn = !(this.getUser() === null);

  constructor(private http: HttpClient, private router: Router) {}

  setUser(user: User) {
    this.loggedInUser = user;
  }

  getUser() {
    if (this.loggedInUser) {
      return this.loggedInUser;
    } else {
      return null;
    }
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user/login`, user);
  }

  logout() {
    this.router.navigate(['login']);
    this.loggedInUser = null;
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user/create`, user);
  }
}
