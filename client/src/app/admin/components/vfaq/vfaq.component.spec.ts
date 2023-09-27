import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfaqComponent } from './vfaq.component';

describe('VfaqComponent', () => {
  let component: VfaqComponent;
  let fixture: ComponentFixture<VfaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VfaqComponent]
    });
    fixture = TestBed.createComponent(VfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
