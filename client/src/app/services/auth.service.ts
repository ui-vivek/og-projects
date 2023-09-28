import { AfterViewInit, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userEmailOfLocal: any;
  constructor() {
    this.userEmailOfLocal = JSON.parse(localStorage.getItem('UserData')!).email;
  }

  public checkUserSignInData(SignInData: any): boolean {
    let email = '';
    if (localStorage.getItem('UserData')) {
      email = SignInData.value.email;
      console.log("email",email)
      console.log('useremail', this.userEmailOfLocal);
      return email == this.userEmailOfLocal
        ? true
        : false;
    }
    return false;
  }

  //---------i am only checking the email not the password for authentication.-----------
  checkUser(): boolean {
    return localStorage.getItem('isLogedIn') == 'true' ? true : false;
  }
}
