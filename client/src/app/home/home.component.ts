import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const prev = document.querySelector<HTMLButtonElement>('#prev');
    const next = document.querySelector<HTMLButtonElement>('#next');

    let carouselVp = document.querySelector<HTMLDivElement>('#carousel-vp');

    let cardInner =
      document.querySelector<HTMLDivElement>('#card-inner');
    let carouselInnerWidth = cardInner?.getBoundingClientRect().width;

    let leftValue = 0;

    // Variable used to set the carousel movement value (card's width + gap)
    const totalMovementSize =
      parseFloat(
        window.getComputedStyle(
          document.querySelector<HTMLElement>('.card')!
        ).width
      ) +
      parseFloat(
        window.getComputedStyle(cardInner!).getPropertyValue('gap')
      );

    prev?.addEventListener('click', () => {
      if (leftValue !== 0) {
        leftValue -= -totalMovementSize;
        cardInner!.style.left = leftValue + 'px';
      }
    });

    next?.addEventListener('click', () => {
      const carouselVpWidth = carouselVp!.getBoundingClientRect().width;
      console.log(carouselInnerWidth)
      if ((carouselInnerWidth! - Math.abs(leftValue)) > carouselVpWidth) {
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
  }
}
