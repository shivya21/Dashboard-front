import { TestBed } from '@angular/core/testing';

import { CardSevenService } from './card-seven.service';

describe('CardSevenService', () => {
  let service: CardSevenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardSevenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
