import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-btn',
  templateUrl: './test-btn.component.html',
  styleUrls: ['./test-btn.component.scss'],
})
export class TestBtnComponent implements OnInit {
  testForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.testForm = this.fb.group({
      // Create a form control named 'inputControl' with an initial value
      inputControl: new FormControl('Initial Value'),
      inputControll: new FormControl('valid Value'),
    });
  }

  // Function to toggle the disabled state of the form control
  toggleControl() {
    const inputControl = this.testForm
    if (inputControl) {
      if (inputControl.disabled) {
        inputControl.enable();
      } else {
        console.log(this.testForm.value)
        inputControl.disable();
      }
    }
  }
}
