import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public UserSignInData: any; //set some data to check
  email = 'student@gmail.com';
  public userSignInFun(SignInData: any) {
    this.UserSignInData = SignInData.value.email;
  }

  Token = localStorage.getItem('UserData');

  checkUser(): boolean {
    console.log("igigiui",this.UserSignInData)
    return this.email == this.UserSignInData ? true : false;
  }

  constructor() {}
}
