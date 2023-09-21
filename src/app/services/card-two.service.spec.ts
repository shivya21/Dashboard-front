import { TestBed } from '@angular/core/testing';

import { CardTwoService } from './card-two.service';

describe('CardTwoService', () => {
  let service: CardTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
