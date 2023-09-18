import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  loginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

  getdata(){
    console.log(this.loginForm.value)
    
  }
}
