import { TestBed } from '@angular/core/testing';

import { YearinfoService } from './yearinfo.service';

describe('YearinfoService', () => {
  let service: YearinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
