import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Injectable, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userEmailOfLocal: any;
  signUpUrl = 'http://localhost:4000/api/v1/auth/signup';
  signInUrl = 'http://localhost:4000/api/v1/auth/signin';

  constructor(private toast: NgToastService, private http: HttpClient,private router: Router) {
    if (localStorage.getItem('UserData')) {
      this.userEmailOfLocal = JSON.parse(
        localStorage.getItem('UserData')!
      ).email;
    }
  }
  //Sign-Up User and store data in DataBase
  async SignUpUser(signUpData: any) {
    try {
      const response:any = await this.http.post(this.signUpUrl, signUpData).toPromise();
      if(response){
        if( response.status === 201){
          this.toast.success({
            detail: 'SUCCESS',
            summary: 'User registered successfully',
            position: 'topRight',
          });
          this.router.navigate(['/sign-in']);
        }else{
          this.toast.error({
            detail: 'ERROR',
            summary: response.message,
            position: 'topRight',
          });
        }
      }else{
        this.toast.error({
          detail: 'ERROR',
          summary: 'User registration failed',
          position: 'topRight',
        });
      }
    } catch (error: any) {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Something went wrong',
          position: 'topRight',
        });
    }
  }

  public SignInUser(SignInData: any): boolean {
    const userData = SignInData.value;
    console.log('userdata', userData);
    this.http.post(this.signInUrl, userData).subscribe((resp:any) => {
      if(resp.status === 201){
        console.log(resp)
        localStorage.setItem('jwtToken', resp.data.access_token);
        this.router.navigate(['/admin']);
      }
    });
    return false;
  }


  //---------i am only checking the email not the password for authentication.-----------
  checkUser(): boolean {
    return localStorage.getItem('isLogedIn') == 'true' ? true : false;
  }
}
