import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  CartItemData = [
    //dynamic data from api or backend
    { name: 'Banana Smoothies', price: 50, quantity: 1 },
    { name: 'Papaya Smoothies', price: 60, quantity: 1 },
    { name: 'Mango Smoothies', price: 80, quantity: 1 },
  ];

  cartItems = this.CartItemData;

  totalPrice = 0;

  getTotalPrice() {
    let price = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      price = this.cartItems[i].price + price;
    }
    this.totalPrice = price;
  }

  ngOnInit() {
    this.getTotalPrice();
  }

  increament(index: number) {
    console.log(index);
    if (this.cartItems[index].quantity == 20) {
      return;
    }
    let currentPrice =
      this.cartItems[index].price / this.cartItems[index].quantity;
    this.cartItems[index].quantity += 1;
    this.cartItems[index].price = this.cartItems[index].price + currentPrice;
    this.getTotalPrice();
  }

  decreament(index: number) {
    console.log(index);
    if (this.cartItems[index].quantity == 1) {
      return;
    }
    let currentPrice =
      this.cartItems[index].price / this.cartItems[index].quantity;
    this.cartItems[index].price = this.cartItems[index].price - currentPrice;
    this.cartItems[index].quantity -= 1;
    this.getTotalPrice();
  }

  removeItem(i: number) {
    console.log(i);
    this.cartItems = this.cartItems.filter(
      (item: any, index: any) => i != index
    );

    this.getTotalPrice();
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
