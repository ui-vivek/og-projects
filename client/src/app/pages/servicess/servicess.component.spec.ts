import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicessComponent } from './servicess.component';

describe('ServicessComponent', () => {
  let component: ServicessComponent;
  let fixture: ComponentFixture<ServicessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicessComponent]
    });
    fixture = TestBed.createComponent(ServicessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
