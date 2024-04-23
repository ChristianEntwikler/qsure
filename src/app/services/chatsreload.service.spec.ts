import { TestBed } from '@angular/core/testing';

import { ChatsreloadService } from './chatsreload.service';

describe('ChatsreloadService', () => {
  let service: ChatsreloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatsreloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
