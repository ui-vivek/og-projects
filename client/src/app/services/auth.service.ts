import { AfterViewInit, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public UserSignInData: any; //set some data to check
  userEmail = 'hhh';
  constructor() {
    const localData = JSON.parse(localStorage.getItem('UserData')!);
    this.userEmail = localData.email;
    console.log('zzzzzzzzzz', this.userEmail);
  }
  public userSignInFun(SignInData: any) {
    this.UserSignInData = SignInData.value.email;
  }

  isLogedIn() {
    return localStorage.getItem('isLogedIn') == 'true' ? true : false;
  }
  testEmail = 'a@gmail.com';

  checkUser(): boolean {
    // if (this.UserSignInData == this.testEmail) {
    //   console.log('true is running');
    //   return true;
    // } else {
    //   return false;
    // }
    return localStorage.getItem('isLogedIn') == 'true' ? true : false;
  }
}
