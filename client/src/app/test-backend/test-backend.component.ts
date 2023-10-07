import { Component } from '@angular/core';
import { AddressServicesService } from '../services/address-services.service';

@Component({
  selector: 'app-test-backend',
  templateUrl: './test-backend.component.html',
  styleUrls: ['./test-backend.component.scss'],
})
export class TestBackendComponent {
  datas: any;
  constructor(private _getData: AddressServicesService) {
    // _getData.datas().subscribe((data) => {
    //   this.datas = data;
    // });
    this.datas = _getData;
  }

  dispData() {
    // console.log(this.data)
    // console.log(this.datas[0].PostOffice);
    // console.log('i am BatMan', this.datas);
    this.datas.datas().subscribe((data: any) => {
      console.log('Vanda is hear', data);
    });
  }
}
