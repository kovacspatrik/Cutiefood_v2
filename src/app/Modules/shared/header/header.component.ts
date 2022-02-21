import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isToggleClosed = true;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  changeToggleState(): void {
    this.isToggleClosed = !this.isToggleClosed;
  }

  navigateToRoute() {
    console.log('navigate');
  }

  logout() {
    this.authService.setUser(null);
    this.router.navigate(['/login']);
  }
}
