import { Component } from '@angular/core';
import { Form } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  getAuth(datas: Form) {
    console.log(datas);
  }
}
