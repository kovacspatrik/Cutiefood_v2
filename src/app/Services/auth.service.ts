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
  loggedInUser: User;

  constructor(private http: HttpClient, private router: Router) {}

  setUser(user: User) {
    this.loggedInUser = user;
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user/login`, user);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user/create`, user);
  }
}
