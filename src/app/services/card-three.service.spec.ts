import { TestBed } from '@angular/core/testing';

import { CardThreeService } from './card-three.service';

describe('CardThreeService', () => {
  let service: CardThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
