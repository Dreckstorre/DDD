import { TestBed } from '@angular/core/testing';

import { MaterielHttpService } from './materiel-http.service';

describe('MaterielHttpService', () => {
  let service: MaterielHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterielHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
