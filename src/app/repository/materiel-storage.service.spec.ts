import { TestBed } from '@angular/core/testing';

import { MaterielStorageService } from './materiel-storage.service';

describe('MaterielStorageService', () => {
  let service: MaterielStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterielStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
