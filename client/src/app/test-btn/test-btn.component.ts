import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-btn',
  templateUrl: './test-btn.component.html',
  styleUrls: ['./test-btn.component.scss'],
})
export class TestBtnComponent implements OnInit {
  allbtn = [
    { name: 'btn 1', color: 'red', isTrue: true },
    { name: 'btn 2', color: 'blue', isTrue: false },
    { name: 'btn 3', color: 'blue', isTrue: false },
  ];
  ngOnInit() {}

  onClick(index: any) {
    this.allbtn[index].color = 'red';
    this.allbtn[index].isTrue = true;

    for (let i = 0; i < this.allbtn.length; i++) {
      if (i !== index) {
        this.allbtn[i].color = 'blue';
        this.allbtn[i].isTrue = false;
      }
    }
  }
}
