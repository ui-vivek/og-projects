import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  getAddress(pin:number) {
    const pinCode = pin;
    console.log(pin)
    // const pinCode = 302019;
    const apiUrl = `https://api.postalpincode.in/pincode/${pinCode}`;
    return this.http.get(apiUrl);
  }
}
