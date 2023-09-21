import { TestBed } from '@angular/core/testing';

import { CardFourService } from './card-four.service';

describe('CardFourService', () => {
  let service: CardFourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardFourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
