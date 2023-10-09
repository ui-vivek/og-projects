import { Component } from '@angular/core';
import { AddressServicesService } from '../services/address-services.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-backend',
  templateUrl: './test-backend.component.html',
  styleUrls: ['./test-backend.component.scss'],
})
export class TestBackendComponent {
  apiUrl = 'http://localhost:4000/get/api';
  responseData: any;
  constructor(private http: HttpClient) {}

  dispData() {
    return this.http.get(this.apiUrl).subscribe((datas) => {
      console.log(datas);
    });
  }

  signupForm(data: NgForm) {
    console.log(data);
    return this.http.post(this.apiUrl,data).subscribe((result)=>{
      console.log(result)
    })
  }

  // user = { id: 1, name: 'Hello' };
  // pin = { pin: 302019 };
  // pin = 302019;
  // pin = 'awetgr';

  postTest(pin:any) {
    const pinCode = { pin: pin };
    return this.http.post(this.apiUrl, pinCode).subscribe((ans) => {
      this.responseData = ans; // Store the response data
      console.log(ans);
    });
  }

  //this is the get request with params passed to the node
  // postTest(pin: any) {
  //   return this.http.get(this.apiUrl + `?pin=${pin}`).subscribe((ans) => {
  //     this.responseData = ans; // Store the response data
  //     console.log(ans);
  //   });
  // }
}
