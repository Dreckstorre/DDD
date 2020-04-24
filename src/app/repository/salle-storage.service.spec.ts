import { TestBed } from '@angular/core/testing';

import { SalleStorageService } from './salle-storage.service';

describe('SalleStorageService', () => {
  let service: SalleStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalleStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
