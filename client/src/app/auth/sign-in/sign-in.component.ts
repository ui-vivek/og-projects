import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private _SignInData: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onsignIn() {
    console.log(this.loginForm.value);
    this._SignInData.userSignInFun(this.loginForm);
    this.router.navigate(['/'])
  }
}
