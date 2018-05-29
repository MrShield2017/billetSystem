import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ForestillingService } from './forestilling.service';

describe('ForestillingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ForestillingService]
    });
  });

  it('should be created', inject([ForestillingService], (service: ForestillingService) => {
    expect(service).toBeTruthy();
  }));
});
