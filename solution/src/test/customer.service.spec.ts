import { TestBed } from '@angular/core/testing';

import { CustomerService } from '../app/service/customer.service';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have customer list', () => {
    expect(service.list).toBeTruthy();
  });

  it('should have correct items in the list', () => {
    expect(service.list[0].id).toBeTruthy();
    expect(service.list[0].name).toBeTruthy();
    expect(service.list[0].email).toBeTruthy();
    expect(service.list[0].address).toBeTruthy();
    expect(service.list[0].ip_address).toBeTruthy();
    expect(typeof service.list[0].active === 'boolean').toBeTruthy();
  });
});
