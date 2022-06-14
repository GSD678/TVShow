import { TestBed } from '@angular/core/testing';

import { TVServiceService } from './tvservice.service';

describe('TVServiceService', () => {
  let service: TVServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TVServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
