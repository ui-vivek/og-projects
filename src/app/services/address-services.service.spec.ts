import { TestBed } from '@angular/core/testing';

import { AddressServicesService } from './address-services.service';

describe('AddressServicesService', () => {
  let service: AddressServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
