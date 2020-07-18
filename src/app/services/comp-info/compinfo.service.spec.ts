import { TestBed } from '@angular/core/testing';

import { CompinfoService } from './compinfo.service';

describe('CompinfoService', () => {
  let service: CompinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
