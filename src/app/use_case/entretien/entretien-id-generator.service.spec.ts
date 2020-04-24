import { TestBed } from '@angular/core/testing';

import { EntretienIdGeneratorService } from './entretien-id-generator.service';

describe('EntretienIdGeneratorService', () => {
  let service: EntretienIdGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntretienIdGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
