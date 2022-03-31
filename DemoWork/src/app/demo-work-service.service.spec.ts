import { TestBed } from '@angular/core/testing';

import { DemoWorkServiceService } from './demo-work-service.service';

describe('DemoWorkServiceService', () => {
  let service: DemoWorkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoWorkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
