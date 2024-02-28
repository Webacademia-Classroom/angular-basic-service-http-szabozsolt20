import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { CustomerService } from '../../service/customer.service';

import { customers } from '../../../test/customers';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomersComponent,
        CommonModule,
      ],
      providers: [{ provide: CustomerService, useValue: {
        list: customers,
        getAll: () => of(customers)
      } }],
    });
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an importend member: customerService', () => {
    expect(component.customerService).toBeTruthy();
    expect(typeof component.customerService.getAll).toEqual('function');
  });

  it('should have an ngOnInit method', () => {
    expect(typeof component.ngOnInit).toEqual('function');
  });

  it('ngOnInit method should set list variable to customers', () => {
    component.ngOnInit();
    expect(component.list).toEqual(customers);
  });

});
