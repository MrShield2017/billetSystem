import { TestBed, inject } from '@angular/core/testing';

import { BestillingService } from './bestilling.service';

describe('BestillingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BestillingService]
    });
  });

  it('should be created', inject([BestillingService], (service: BestillingService) => {
    expect(service).toBeTruthy();
  }));
});
