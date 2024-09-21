import { TestBed } from '@angular/core/testing';

import { HomeCardDataService } from './home-card-data.service';

describe('HomeCardDataService', () => {
  let service: HomeCardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeCardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
