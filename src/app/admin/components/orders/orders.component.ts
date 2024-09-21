import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  sortOrderBtns = [
    //sorting buttons
    { name: 'All Orders', isTrue: true },
    { name: 'Order Delivered', isTrue: false },
    { name: 'Order Canceled', isTrue: false },
  ];
  // demo items
  // TODO : add the image in the object
  orders_items = [
    {
      name: 'item 1',
      image: '',
      date: '01-Oct-23',
      time: '12:45 PM',
      delivered: undefined,
    },
    {
      name: 'item 2',
      image: '',
      date: '02-Oct-23',
      time: '04:12 PM',
      delivered: undefined,
    },
    {
      name: 'item 3',
      image: '',
      date: '03-Oct-23',
      time: '10:00 AM',
      delivered: false,
    },
    {
      name: 'item 4',
      image: '',
      date: '04-Oct-23',
      time: '05:11 PM',
      delivered: true,
    },
    {
      name: 'item 5',
      image: '',
      date: '05-Oct-23',
      time: '11:15 AM',
      delivered: false,
    },
    {
      name: 'item 6',
      image: '',
      date: '06-Oct-23',
      time: '01:00 PM',
      delivered: true,
    },
    {
      name: 'item 7',
      image: '',
      date: '07-Oct-23',
      time: '09:00 AM',
      delivered: false,
    },
  ];

  allOders: any;
  ngOnInit() {
    this.allOders = this.orders_items; //initially rander all items
  }

  OnClick(index: any) {
    this.sortOrderBtns[index].isTrue = true;
    for (let i = 0; i < this.sortOrderBtns.length; i++) {
      if (i !== index) {
        this.sortOrderBtns[i].isTrue = false;
      }
    }
    if (index == 1) {
      this.allOders = this.orders_items.filter(
        (item) => item.delivered == true
      );
    } else if (index == 2) {
      this.allOders = this.orders_items.filter(
        (item) => item.delivered == false
      );
    } else {
      this.allOders = this.orders_items;
    }
  }
  getindex(i: any) {
    // console.log(i);
    // this.allOders = this.orders_items.filter((item, index) => i != index);
    // this will not update the updated array , it will add all the values which are in the main array
    this.allOders = this.allOders.filter((item: any, index: any) => i != index);
  }
}
