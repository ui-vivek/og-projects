import { AfterViewInit, Injectable, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userEmailOfLocal: any;
  constructor(private toast: NgToastService) {
    if (localStorage.getItem('UserData')) {
      this.userEmailOfLocal = JSON.parse(
        localStorage.getItem('UserData')!
      ).email;
    }
  }

  public checkUserSignInData(SignInData: any): boolean {
    let email = '';
    if (localStorage.getItem('UserData')) {
      email = SignInData.value.email;
      console.log('email', email);
      console.log('useremail', this.userEmailOfLocal);
      if (email == this.userEmailOfLocal) {
        // this.toast.success({
        //   detail: 'SUCCESS',
        //   summary: 'Welcome to Smoothies world.',
        //   position: 'topRight',
        // });
        return true;
      }
      // return email == this.userEmailOfLocal ? true : false;
    }
    this.toast.error({
      detail: 'ERROR',
      summary: 'Enter Valid Details',
      position: 'topRight',
    });
    return false;
  }

  //---------i am only checking the email not the password for authentication.-----------
  checkUser(): boolean {
    return localStorage.getItem('isLogedIn') == 'true' ? true : false;
  }
}
