import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { NgToastService } from 'ng-angular-popup';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  HomeColor = '#ecc08d';
  WorkColor = 'white';
  borderColor = '#ccc';
  isDisabled = true;
  pinCodeNumber: number = 0;
  pinSize = 6;
  userDetails: any = {};
  userName: string | undefined;
  userEmail: string | undefined;
  changeProfileBtn = 'Update Profile';
  userAddress: any = {};
  userdetailsForm!: FormGroup;
  state = '';
  HomeDelivery: boolean | undefined;
  constructor(
    private _address: AddressService,
    private toast: NgToastService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('UserData')!);
    if (localStorage.getItem('UserAddress')) {
      this.userAddress = JSON.parse(localStorage.getItem('UserAddress')!);
      this.state = this.userAddress.state;
      // this.userAddress.home_work ==true ? this.HomeDelivery=true : this.HomeDelivery=false;
      if (this.userAddress.home_work == true) {
        this.HomeColor = '#ecc08d';
        this.WorkColor = 'white';
        this.HomeDelivery = true;
      } else {
        this.HomeDelivery = false;
        this.WorkColor = '#ecc08d';
        this.HomeColor = 'white';
      }
    }
    this.userName = this.userDetails.name;
    this.userEmail = this.userDetails.email;
    this.userdetailsForm = this.fb.group({
      name: new FormControl(this.userName),
      email: new FormControl(this.userEmail),
      phoneNumber: new FormControl(),
      password: new FormControl(''),
      house: new FormControl(this.userAddress.house),
      city_town: new FormControl(this.userAddress.city_town),
      locality: new FormControl(this.userAddress.locality),
      pincode: new FormControl(this.userAddress.pincode),
      landmark: new FormControl(this.userAddress.landmark),
      alternative_phone: new FormControl(this.userAddress.alternative_phone),
      home_work: new FormControl(this.HomeDelivery),
    });

    this.userdetailsForm.disable();
  }

  getPinCode(e: any) {
    if (e.length == this.pinSize) {
      this.pinCodeNumber = e;

      setTimeout(() => {
        this._address
          .getAddress(this.pinCodeNumber)
          .subscribe((address: any) => {
            if (address[0].Status == 'Success') {
              this.state = address[0].PostOffice[0].State;
              console.log(address[0].PostOffice[0].State);
              console.log(this.state);
            } else {
              console.log('Invalid Pin Code');
              this.borderColor = 'red';
              this.state = 'Invalid pin code';
              this.toast.error({
                detail: 'ERROR',
                summary: 'Invalid Pin Code',
                position: 'topRight',
              });
            }
          });
      }, 1000);

      console.log(this.pinCodeNumber);
    }
    e.length > this.pinSize || e.length < this.pinSize
      ? (this.borderColor = 'red')
      : (this.borderColor = '#ccc');
  }

  homeBtn() {
    this.HomeColor = '#ecc08d';
    this.WorkColor = 'white';
    this.HomeDelivery = true;
    return false;
  }
  workBtn() {
    this.WorkColor = '#ecc08d';
    this.HomeColor = 'white';
    this.HomeDelivery = false;
    return false;
  }

  SubmiteForm() {
    const inputControl = this.userdetailsForm;

    if (this.changeProfileBtn == 'Update Profile' && inputControl) {
      inputControl.enable();
      this.isDisabled = false;
      this.changeProfileBtn = 'Save Changes';
    } else {
      console.log(this.userdetailsForm.value);
      this.isDisabled = true;
      //set user personal data
      if (localStorage.getItem('UserData')) {
        this.userDetails.email = inputControl.value.email;
        this.userDetails.name = inputControl.value.name;
        this.userDetails.password = inputControl.value.password;
        this.userDetails.confarmpassword = inputControl.value.password;
        localStorage.setItem('UserData', JSON.stringify(this.userDetails));
      }
      //set user address
      this.userAddress = {
        house: inputControl.value.house,
        city_town: inputControl.value.city_town,
        locality: inputControl.value.locality,
        pincode: inputControl.value.pincode,
        state: this.state,
        landmark: inputControl.value.landmark,
        alternative_phone: inputControl.value.alternative_phone,
        home_work: this.HomeDelivery,
      };

      localStorage.setItem('UserAddress', JSON.stringify(this.userAddress));

      inputControl.disable();
      this.changeProfileBtn = 'Update Profile';
    }
    return false;
  }
}
