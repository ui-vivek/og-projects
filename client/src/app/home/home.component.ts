import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit , AfterViewInit {
  constructor() {}

  datas = [
    {
      url: 'smoothie10.jpg',
      title: 'Kiwi-Smoothies',
      subTitle: 'Custome1 Smoothies',
      bg:'green'
    },
    {
      url: 'smoothie20.jpg',
      title: 'Org/sweet-lime',
      subTitle: 'Custome2 Smoothies',
      bg:'orange'
    },
    {
      url: 'smoothie30.jpg',
      title: 'Banana-Almond',
      subTitle: 'Custome3 Smoothies',
      bg:'yellow'
    },
    {
      url: 'smoothie40.jpg',
      title: 'Mixed-Fruit',
      subTitle: 'Custome4 Smoothies',
      bg:"purple"
    },
    {
      url: 'smoothie50.jpg',
      title: 'Mango-Smoothies',
      subTitle: 'Custome5 Smoothies',
      bg:"lightyellow"
    },
  ];

  data = [this.datas[0], this.datas[1], this.datas[2]];


  ngAfterViewInit(): void {
    const dropdownEls = document.querySelectorAll('.dropdown-el');

    dropdownEls.forEach((dropdownEl) => {
      dropdownEl.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!(e.target instanceof HTMLElement)) {
          return;
        }

        // Toggle the 'expanded' class for the specific dropdown
        if (dropdownEl.classList.contains('expanded')) {
          dropdownEl.classList.remove('expanded');
        } else {
          dropdownEl.classList.add('expanded');
        }

        // Find the corresponding radio input and check it for the specific dropdown
        const labelFor = e.target.getAttribute('for');
        if (labelFor) {
          const radioInput = document.getElementById(labelFor);
          if (radioInput && radioInput instanceof HTMLInputElement) {
            radioInput.checked = true;
          }
        }
      });
    });

    document.addEventListener('click', function () {
      // Close all dropdowns when clicking outside of any dropdown
      dropdownEls.forEach((dropdownEl) => {
        dropdownEl.classList.remove('expanded');
      });
    });
  }

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
      // console.log(carouselInnerWidth);
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

    let index = 3;
    setInterval(() => {
      if (index == 4) {
        index = 0;
      }
      this.data.splice(0, 1);
      this.data.push(this.datas[index]);
      // console.log(this.data);
      index++;
    }, 2500);

    const allDis = document.querySelector('.all-discovers');
  }
}
