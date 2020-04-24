import { TestBed } from '@angular/core/testing';

import { EntretienHttpService } from './entretien-http.service';

describe('EntretienHttpService', () => {
  let service: EntretienHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntretienHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
