import { TestBed } from '@angular/core/testing';

import { RecruteurHttpService } from './recruteur-http.service';

describe('RecruteurHttpService', () => {
  let service: RecruteurHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruteurHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
