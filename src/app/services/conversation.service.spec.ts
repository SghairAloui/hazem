import { TestBed } from '@angular/core/testing';

import { ConversationService } from './conversation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConversationService', () => {
  let service: ConversationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
