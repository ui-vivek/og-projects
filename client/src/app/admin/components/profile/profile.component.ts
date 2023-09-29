import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  HomeColor = '#ecc08d';
  WorkColor = 'white';
  isDisabled = true;
  changeProfileBtn = 'Update Profile';
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

  prevent() {
    this.isDisabled == true
      ? (this.isDisabled = false)
      : (this.isDisabled = true);

    this.changeProfileBtn == 'Update Profile'
      ? (this.changeProfileBtn = 'Save Changes')
      : (this.changeProfileBtn = 'Update Profile');
    return false;
  }
}
