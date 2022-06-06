import { TestBed } from '@angular/core/testing';

import { OdosielatelService } from './odosielatel.service';

describe('OdosielatelService', () => {
  let service: OdosielatelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OdosielatelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
