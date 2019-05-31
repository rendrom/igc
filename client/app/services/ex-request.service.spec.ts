import { TestBed, inject } from '@angular/core/testing';

import { ExRequestService } from './ex-request.service';

describe('ExRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExRequestService]
    });
  });

  it('should be created', inject([ExRequestService], (service: ExRequestService) => {
    expect(service).toBeTruthy();
  }));
});
