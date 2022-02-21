import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  submitForm() {
    const user: User = {
      userName: this.userName,
      password: this.password,
    };

    this.authService.login(user).subscribe((res) => {
      this.authService.setUser(res);
      this.router.navigate(['/home']);
    });

    // this.router.navigate(['/home']);
    // const data = {
    //   password: this.password,
    //   email: this.email
    // }
    // console.log(data);
  }
}
