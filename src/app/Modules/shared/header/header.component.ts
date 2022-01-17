import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isToggleClosed = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  changeToggleState(): void {
    this.isToggleClosed = !this.isToggleClosed;
  }

  navigateToRoute() {
    console.log('navigate');
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
