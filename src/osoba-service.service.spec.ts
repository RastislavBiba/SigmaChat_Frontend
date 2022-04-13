import { TestBed } from '@angular/core/testing';
import {CustomerServiceService} from "./osoba-service.service";


describe('RoomServiceService', () => {
  let service: CustomerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
