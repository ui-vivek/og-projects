import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Injectable, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userEmailOfLocal: any;
  signUpUrl = 'http://localhost:4000/user/sign-up';
  signInUrl = 'http://localhost:4000/user/sign-in';

  constructor(private toast: NgToastService, private http: HttpClient) {
    if (localStorage.getItem('UserData')) {
      this.userEmailOfLocal = JSON.parse(
        localStorage.getItem('UserData')!
      ).email;
    }
  }
  //Sign-Up User and store data in DataBase
  async SignUpUser(signUpData: any) {
    try {
      // Send the POST request
      await this.http.post(this.signUpUrl, signUpData).toPromise();
      localStorage.setItem('isLogedIn', 'true');
      // The toPromise() method converts the observable to a promise and awaits the result
    } catch (error) {
      console.error('Error:', error);
      // Handle the error here
    }
  }

  public checkUserSignInData(SignInData: any): boolean {
    const userData = SignInData.value;
    console.log('userdata', userData);
    this.http.post(this.signInUrl, userData).subscribe((ans) => {
      console.log(ans);
    });
    /*
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
    */

    // this.http.post(this.signInUrl, SignInData.value).subscribe((result) => {
    //   console.log(result);
    // });

    // this.toast.error({
    //   detail: 'ERROR',
    //   summary: 'Enter Valid Details',
    //   position: 'topRight',
    // });
    return false;
  }

  //---------i am only checking the email not the password for authentication.-----------
  checkUser(): boolean {
    return localStorage.getItem('isLogedIn') == 'true' ? true : false;
  }
}
