import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }


  submitForm() {
    this.router.navigate(['/home']);
    const data = {
      password: this.password,
      email: this.email
    }
    console.log(data);
  }
}
