import { TestBed } from '@angular/core/testing';

import { CardOneService } from './card-one.service';

describe('CardOneService', () => {
  let service: CardOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
