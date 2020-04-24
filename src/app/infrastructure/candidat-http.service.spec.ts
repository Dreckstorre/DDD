import { TestBed } from '@angular/core/testing';

import { CandidatHttpService } from './candidat-http.service';

describe('CandidatHttpService', () => {
  let service: CandidatHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
