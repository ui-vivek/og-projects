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
  rememberCheckBoxDisplay = 'none';
  constructor(private _SignInData: AuthService, private router: Router) {}
  ngOnInit(): void {
    if (this._SignInData.checkUser()) {
      this.router.navigate(['admin']);
    }
    return;
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onsignIn() {
    console.log(this.loginForm.value);
    // this._SignInData.checkUserSignInData(this.loginForm)
    // console.log("check",this.loginForm)
    // if (this._SignInData.checkUserSignInData(this.loginForm)) {
    // localStorage.setItem('isLogedIn', 'true');
    // this.router.navigate(['admin']);
    // }

    // this._SignInData.checkUserSignInData(this.loginForm);

    if (this._SignInData.checkUserSignInData(this.loginForm)) {
      localStorage.setItem('isLogedIn', 'true');
      this.router.navigate(['admin']);
    }
  }

  rememberCheckBox() {
    this.rememberCheckBoxDisplay == 'none'
      ? (this.rememberCheckBoxDisplay = 'inline-block')
      : (this.rememberCheckBoxDisplay = 'none');
  }
}
