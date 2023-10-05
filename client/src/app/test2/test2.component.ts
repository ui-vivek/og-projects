import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})
export class Test2Component implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  items: any;
  Tt_item: any;

  ngOnInit(): void {
    this.Tt_item = this.data.item;
    console.log(this.data.item);
  }
}
