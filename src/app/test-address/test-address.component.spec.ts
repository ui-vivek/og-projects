import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAddressComponent } from './test-address.component';

describe('TestAddressComponent', () => {
  let component: TestAddressComponent;
  let fixture: ComponentFixture<TestAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAddressComponent]
    });
    fixture = TestBed.createComponent(TestAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
