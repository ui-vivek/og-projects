import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBackendComponent } from './test-backend.component';

describe('TestBackendComponent', () => {
  let component: TestBackendComponent;
  let fixture: ComponentFixture<TestBackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestBackendComponent]
    });
    fixture = TestBed.createComponent(TestBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
