import { TestBed, inject } from '@angular/core/testing';

import { FellowsService } from './fellows.service';

describe('FellowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FellowsService]
    });
  });

  it('should be created', inject([FellowsService], (service: FellowsService) => {
    expect(service).toBeTruthy();
  }));
});
