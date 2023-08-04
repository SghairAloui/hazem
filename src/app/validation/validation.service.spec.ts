import { TestBed } from '@angular/core/testing';

import { ValidationService } from './validation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationService);
    imports: [HttpClientTestingModule]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
