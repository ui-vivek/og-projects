import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  signOut() {
    localStorage.setItem('isLogedIn', 'false');
    localStorage.removeItem('UserData');
    this.router.navigate(['sign-in']);
  }
}
