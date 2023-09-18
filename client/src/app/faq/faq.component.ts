import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements AfterViewInit {
  @ViewChild('accordion', { static: false }) accordion!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const items = this.accordion.nativeElement.querySelectorAll(
      '.accordion .accordion-item'
    );

    const toggleAccordion = (event: any): void => {
      const item = event.currentTarget;
      const button = item.querySelector('button');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      items.forEach((accordionItem: any) => {
        this.renderer.setAttribute(
          accordionItem.querySelector('button'),
          'aria-expanded',
          'false'
        );
      });

      this.renderer.setAttribute(
        button,
        'aria-expanded',
        isExpanded ? 'false' : 'true'
      );
    };

    items.forEach((item: any) => {
      this.renderer.listen(item, 'click', toggleAccordion);
    });
  }
}
