import { TestBed } from '@angular/core/testing';

import { SpecialityService } from './speciality.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SpecialityService', () => {
  let service: SpecialityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialityService);
    imports: [HttpClientTestingModule]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
