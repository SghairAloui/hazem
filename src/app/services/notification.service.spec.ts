import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
    imports: [HttpClientTestingModule]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
