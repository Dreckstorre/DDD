import { TestBed } from '@angular/core/testing';

import { EntretienStorageService } from './entretien-storage.service';

describe('EntretienStorageService', () => {
  let service: EntretienStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntretienStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
