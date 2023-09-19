import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomepageCardsService {
  constructor() {}
  datas() {
    return [
      {
        url: 'smoothie10.jpg',
        title: 'Kiwi-Smoothies',
        subTitle: 'Custome1 Smoothies',
        bg: 'green',
      },
      {
        url: 'smoothie20.jpg',
        title: 'Org/sweet-lime',
        subTitle: 'Custome2 Smoothies',
        bg: 'orange',
      },
      {
        url: 'smoothie30.jpg',
        title: 'Banana-Almond',
        subTitle: 'Custome3 Smoothies',
        bg: 'yellow',
      },
      {
        url: 'smoothie40.jpg',
        title: 'Mixed-Fruit',
        subTitle: 'Custome4 Smoothies',
        bg: 'purple',
      },
      {
        url: 'smoothie50.jpg',
        title: 'Mango-Smoothies',
        subTitle: 'Custome5 Smoothies',
        bg: 'lightyellow',
      },
    ];
  }
}
