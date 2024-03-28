import { TestBed } from '@angular/core/testing';

import { SearchengineService } from './searchengine.service';

describe('SearchengineService', () => {
  let service: SearchengineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchengineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
