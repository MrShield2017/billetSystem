import { TestBed, inject } from '@angular/core/testing';

import { ForestillingService } from './forestilling.service';

describe('ForestillingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForestillingService]
    });
  });

  it('should be created', inject([ForestillingService], (service: ForestillingService) => {
    expect(service).toBeTruthy();
  }));
});
