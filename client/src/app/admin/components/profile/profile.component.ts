import { Component } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { NgToastService } from 'ng-angular-popup';
import { FormControl ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  HomeColor = '#ecc08d';
  WorkColor = 'white';
  borderColor = '#ccc';
  isDisabled = true;
  pinCodeNumber: number = 0;
  state = '';
  pinSize = 6;
  userDetails: any = [];
  userName:string | undefined;
  userEmail:string | undefined;
  changeProfileBtn = 'Update Profile';
  constructor(private _address: AddressService, private toast: NgToastService) {
    this.userDetails.push(JSON.parse(localStorage.getItem('UserData')!));
    this.userName=this.userDetails[0].name;
    this.userEmail=this.userDetails[0].email
    console.log(this.userDetails);
  }

  userdetailsForm =new FormGroup({
    
  })

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
    return false;
  }
  workBtn() {
    this.WorkColor = '#ecc08d';
    this.HomeColor = 'white';
    return false;
  }

  SubmiteForm() {
    this.isDisabled == true
      ? (this.isDisabled = false)
      : (this.isDisabled = true);

    this.changeProfileBtn == 'Update Profile'
      ? (this.changeProfileBtn = 'Save Changes')
      : (this.changeProfileBtn = 'Update Profile');
    return false;
  }
}
