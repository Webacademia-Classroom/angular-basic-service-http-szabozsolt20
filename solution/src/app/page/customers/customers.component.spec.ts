import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { CustomerService } from '../../service/customer.service';

import { customers } from '../../../test/customers';
import { CommonModule } from '@angular/common';

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
        list: customers
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
    expect(component.customerService.list).toEqual(customers);
  });

  it('should have a list variable with customers', () => {
    expect(component.list).toEqual(customers);
  });

  it('should have a table in the template', () => {
    const table = fixture.debugElement.nativeElement.querySelector('table');
    expect(table).toBeTruthy();
  });

  it('shuld have table headers with id, name, email, address, ip, active', () => {
    const headers = fixture.debugElement.nativeElement.querySelectorAll('th');
    expect(headers.length).toEqual(6);
    expect(headers[0].textContent).toMatch(/id/i);
    expect(headers[1].textContent).toMatch(/name/i);
    expect(headers[2].textContent).toMatch(/email/i);
    expect(headers[3].textContent).toMatch(/address/i);
    expect(headers[4].textContent).toMatch(/ip/i);
    expect(headers[5].textContent).toMatch(/active/i);
  });

  it('should have table rows with correct data', () => {
    const rows = fixture.debugElement.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toEqual(9);

    const tds = rows[0].querySelectorAll('td');
    expect(tds.length).toEqual(6);
    expect(tds[0].textContent).toMatch(/2/);
    expect(tds[1].textContent).toMatch(/Collie Battson/);
    expect(tds[2].textContent).toMatch(/cbattson1\@paypal.com/);
    expect(tds[3].textContent).toMatch(/48223 Sommers Hill/);
    expect(tds[4].textContent).toMatch(/212.75.82.188/);
    expect(tds[5].textContent).toMatch(/false/);
  });

});
