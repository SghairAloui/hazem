import { TestBed } from '@angular/core/testing';

import { PharmacyService } from './pharmacy.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PharmacyService', () => {
  let service: PharmacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacyService);
    imports: [HttpClientTestingModule]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
