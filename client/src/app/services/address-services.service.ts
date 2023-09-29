import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddressServicesService {
  apiUrl = 'https://api.postalpincode.in/pincode/821108';
  constructor(private http: HttpClient) {}

  datas() {
    return this.http.get(this.apiUrl);
  }
}
