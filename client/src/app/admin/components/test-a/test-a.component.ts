import { Component } from '@angular/core';
import { HomeCardDataService } from '../../services/home-card-data.service';

@Component({
  selector: 'app-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.scss']
})
export class TestAComponent {

  dataFromService;
  constructor(private srv:HomeCardDataService){
    this.dataFromService=srv.testFun();
  }

}
