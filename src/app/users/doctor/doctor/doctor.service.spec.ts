import { TestBed } from '@angular/core/testing';

import { DoctorService } from './doctor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DoctorService', () => {
  let service: DoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorService);
    imports: [HttpClientTestingModule]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
