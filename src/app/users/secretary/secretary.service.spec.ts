import { TestBed } from '@angular/core/testing';

import { SecretaryService } from './secretary.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SecretaryService', () => {
  let service: SecretaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretaryService);
    imports: [HttpClientTestingModule]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
