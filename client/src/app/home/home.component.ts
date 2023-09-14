import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  data = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/ru/thumb/1/1a/Microsoft_Flight_Simulator_2020_cover.jpeg/533px-Microsoft_Flight_Simulator_2020_cover.jpeg',
      title: 'Blueberry-Almond Smoothies',
      subTitle: 'Custome1 Smoothies',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg',
      title: 'Banana-Almond Smoothies',
      subTitle: 'Custome2 Smoothies',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/en/4/43/Star_Wars_Jedi_Survivor.jpg',
      title: 'Apple-Almond Smoothies',
      subTitle: 'Custome3 Smoothies',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Hogwarts-Legacy-cover.jpg',
      title: 'Mango-Almond Smoothies',
      subTitle: 'Custome4 Smoothies',
    },
    {
      url: 'https://www.theloadout.com/wp-content/sites/theloadout/2022/07/nba-2k23-cover-athletes-10.jpg',
      title: 'Kiwi-Almond Smoothies',
      subTitle: 'Custome5 Smoothies',
    },
  ];

  ngOnInit(): void {
    const prev = document.querySelector<HTMLButtonElement>('#prev');
    const next = document.querySelector<HTMLButtonElement>('#next');

    let carouselVp = document.querySelector<HTMLDivElement>('#carousel-vp');

    let cardInner = document.querySelector<HTMLDivElement>('#card-inner');
    let carouselInnerWidth = cardInner?.getBoundingClientRect().width;

    let leftValue = 0;

    // Variable used to set the carousel movement value (card's width + gap)
    const totalMovementSize =
      parseFloat(
        window.getComputedStyle(document.querySelector<HTMLElement>('.card')!)
          .width
      ) +
      parseFloat(window.getComputedStyle(cardInner!).getPropertyValue('gap'));

    prev?.addEventListener('click', () => {
      if (leftValue !== 0) {
        leftValue -= -totalMovementSize;
        cardInner!.style.left = leftValue + 'px';
      }
    });

    next?.addEventListener('click', () => {
      const carouselVpWidth = carouselVp!.getBoundingClientRect().width;
      console.log(carouselInnerWidth);
      if (carouselInnerWidth! - Math.abs(leftValue) > carouselVpWidth) {
        leftValue -= totalMovementSize;
        cardInner!.style.left = leftValue + 'px';
      }
    });

    const mediaQuery425 = window.matchMedia('(max-width: 425px)');
    const mediaQuery766 = window.matchMedia('(max-width: 766px)');

    mediaQuery425.addEventListener('change', mediaManagement);
    mediaQuery766.addEventListener('change', mediaManagement);

    let oldViewportWidth = window.innerWidth;

    function mediaManagement() {
      const newViewportWidth = window.innerWidth;

      if (
        leftValue <= -totalMovementSize &&
        oldViewportWidth < newViewportWidth
      ) {
        leftValue += totalMovementSize;
        cardInner!.style.left = leftValue + 'px';
        oldViewportWidth = newViewportWidth;
      } else if (
        leftValue <= -totalMovementSize &&
        oldViewportWidth > newViewportWidth
      ) {
        leftValue -= totalMovementSize;
        cardInner!.style.left = leftValue + 'px';
        oldViewportWidth = newViewportWidth;
      }
    }
    const allDis = document.querySelector('.all-discovers');

    for (let i = 0; i < 3; i++) {
      const discover = document.createElement('div');
      discover.classList.add('discover');
      allDis?.appendChild(discover);
      const img = document.createElement('img');
      img.src = `${this.data[i].url}`;
      const title = document.createElement('p');
      title.innerHTML = this.data[i].title;

      const subTitle = document.createElement('p');

      if (window.innerWidth > 425) {
        subTitle.innerHTML = this.data[i].subTitle;
      }

      title.style.cssText = `
      font-weight: bold;
      font-size: small;
      padding: 0.5rem;`;
      subTitle.style.cssText = `
      font-size: small;
      `;

      if (i == 1) {
        subTitle.innerHTML = this.data[i].subTitle;
        img.style.cssText = `
        height: 180px;
        width: 180px;`;
        discover.appendChild(img);
        discover.appendChild(title);
        discover.appendChild(subTitle);
        discover.style.cssText = `
        text-align: center;
        `;
      } else {
        img.style.cssText = `
        height: 60px;
        width: 60px;`;

        discover.appendChild(img);
        discover.appendChild(title);
        discover.appendChild(subTitle);
        discover.style.cssText = `
        text-align: center;
        opacity: 0.5;
        `;
      }
    }
  }
}
