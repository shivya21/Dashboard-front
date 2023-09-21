import { TestBed } from '@angular/core/testing';

import { CardEightService } from './card-eight.service';

describe('CardEightService', () => {
  let service: CardEightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardEightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
