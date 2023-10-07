import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @ViewChild('signInForm') signInForm!: NgForm;
  constructor(
    private router: Router,
    private _SignInData: AuthService,
    private toast: NgToastService
  ) {}
  ngOnInit(): void {
    if (this._SignInData.checkUser()) {
      this.router.navigate(['admin']);
    }
    return;
  }

  SignUpUser(datas: NgForm) {
    console.log(datas.valid);
    if (datas.valid) {
      console.log('i am running');
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Your Success Message',
        position: 'topRight',
      });
      localStorage.setItem('UserData', JSON.stringify(datas.value));
      localStorage.setItem('isLogedIn', 'true');
      this.router.navigate(['sign-in']);
      console.log('Form submitted');
      datas.ngSubmit.emit();
    } else {
      console.log('Form is invalid');
      this.toast.error({
        detail: 'ERROR',
        summary: 'Your Error Message',
        position: 'topRight',
      });
    }
  }
}
