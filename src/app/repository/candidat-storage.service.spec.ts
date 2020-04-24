import { TestBed } from '@angular/core/testing';

import { CandidatStorageService } from './candidat-storage.service';

describe('CandidatStorageService', () => {
  let service: CandidatStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
