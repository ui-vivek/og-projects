import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router, private _SignInData: AuthService) {}
  ngOnInit(): void {
    if (this._SignInData.checkUser()) {
      this.router.navigate(['admin']);
    }
    return;
  }

  SignUpUser(datas: Form) {
    console.log(datas);
    localStorage.setItem('UserData', JSON.stringify(datas));
    localStorage.setItem('isLogedIn', 'true');
    this.router.navigate(['sign-in']);
  }
}
