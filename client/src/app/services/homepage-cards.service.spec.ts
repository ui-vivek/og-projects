import { TestBed } from '@angular/core/testing';

import { HomepageCardsService } from './homepage-cards.service';

describe('HomepageCardsService', () => {
  let service: HomepageCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomepageCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
