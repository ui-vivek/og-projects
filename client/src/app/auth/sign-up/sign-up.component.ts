import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  ngOnInit(): void {}

  getAuth(datas: Form) {
    console.log(datas);
    localStorage.setItem('UserData', JSON.stringify(datas));
    // this._authServices.Userdata = datas;
  }
}
