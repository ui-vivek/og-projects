import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, AfterViewInit {
  dropdownElements: NodeListOf<Element> | undefined;

  // constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // You can't select elements here; wait until after the view is initialized
  }
  ngAfterViewInit(): void {
    var dropdownEls = document.querySelectorAll('.dropdown-el');
  
    // Add a click event listener to each dropdown element
    dropdownEls.forEach(function (dropdownEl) {
      dropdownEl.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
  
        if (!(e.target instanceof HTMLElement)) {
          return; // Check if e.target is an HTMLElement
        }
  
        // Toggle the 'expanded' class
        if (dropdownEl.classList.contains('expanded')) {
          dropdownEl.classList.remove('expanded');
        } else {
          dropdownEl.classList.add('expanded');
        }
  
        // Find the corresponding radio input and check it
        var labelFor = e.target.getAttribute('for');
        if (labelFor) {
          var radioInput = document.getElementById(labelFor);
          if (radioInput && radioInput instanceof HTMLInputElement) {
            radioInput.checked = true;
          }
        }
      });
    });
  
    // Add a click event listener to the document to close all dropdowns
    document.addEventListener('click', function () {
      dropdownEls.forEach(function (dropdownEl) {
        dropdownEl.classList.remove('expanded');
      });
    });
  }
  
}
