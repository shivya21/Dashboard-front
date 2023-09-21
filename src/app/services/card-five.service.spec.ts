import { TestBed } from '@angular/core/testing';

import { CardFiveService } from './card-five.service';

describe('CardFiveService', () => {
  let service: CardFiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardFiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
