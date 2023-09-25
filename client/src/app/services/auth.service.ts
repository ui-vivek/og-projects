import { AfterViewInit, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public UserSignInData: any; //set some data to check
  // email = 'student@gmail.com';
  userEmail = 'hhh';
  constructor() {
    this.userEmail = JSON.parse(localStorage.getItem('UserData')!).email;
    console.log(this.userEmail);
  }
  public userSignInFun(SignInData: any) {
    this.UserSignInData = SignInData.value.email;
  }

  Token = localStorage.getItem('UserData');

  isLogedIn(){
    return localStorage.getItem('isLogedIn')=='true' ? true : false
  }

  checkUser(): boolean {
    // console.log(JSON.parse(localStorage.getItem('UserData')!))
    return this.userEmail == this.UserSignInData ? true : false;
  }
}
