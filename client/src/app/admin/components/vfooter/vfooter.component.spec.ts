import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfooterComponent } from './vfooter.component';

describe('VfooterComponent', () => {
  let component: VfooterComponent;
  let fixture: ComponentFixture<VfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VfooterComponent]
    });
    fixture = TestBed.createComponent(VfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
