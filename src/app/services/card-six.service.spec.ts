import { TestBed } from '@angular/core/testing';

import { CardSixService } from './card-six.service';

describe('CardSixService', () => {
  let service: CardSixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardSixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
