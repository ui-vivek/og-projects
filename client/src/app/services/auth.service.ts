import { AfterViewInit, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public checkUserSignInData(SignInData: any): boolean {
    let email = '';
    if (localStorage.getItem('UserData')) {
      email = SignInData.value.email;
      return email == JSON.parse(localStorage.getItem('UserData')!).email
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
