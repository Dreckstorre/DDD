import { TestBed } from '@angular/core/testing';

import { SalleHttpService } from './salle-http.service';

describe('SalleHttpService', () => {
  let service: SalleHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalleHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
