import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Customer } from '../../model/customer';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  standalone: true,
  imports: [
    JsonPipe,
    CommonModule,
    RouterModule,
  ],
})
export class CustomersComponent implements OnInit {
  customerService = inject(CustomerService);

  list: Customer[] = [];

  ngOnInit(): void {
    this.list = this.customerService.list;
  }

}
