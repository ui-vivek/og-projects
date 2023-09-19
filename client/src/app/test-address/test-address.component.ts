import { Component } from '@angular/core';
import { AddressServicesService } from '../services/address-services.service';
@Component({
  selector: 'app-test-address',
  templateUrl: './test-address.component.html',
  styleUrls: ['./test-address.component.scss'],
})
export class TestAddressComponent {
  addressData: any = [];
  placeName:any=[]
  constructor(private addresses: AddressServicesService) {
    addresses.datas().subscribe((address) => {
      this.addressData = address;
      console.log(this.addressData[0].PostOffice);
      this.placeName=this.addressData[0].PostOffice

    });
  }
}
