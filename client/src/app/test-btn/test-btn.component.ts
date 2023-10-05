import { Component, Inject } from '@angular/core';
import { Test2Component } from '../test2/test2.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-test-btn',
  templateUrl: './test-btn.component.html',
  styleUrls: ['./test-btn.component.scss'],
})
export class TestBtnComponent {
  datas = [
    { name: 'item 1', value: 10 },
    { name: 'item 2', value: 20 },
    { name: 'item 3', value: 30 },
    { name: 'item 4', value: 40 },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(index: any) {
    console.log(index);
    this.dialog.open(Test2Component, {
      data: {
        item: index,
      },
    });
  }
}
