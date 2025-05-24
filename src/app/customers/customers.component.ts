import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [HttpClientModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  customers = [] as any;

  customerService = inject(CustomerService);

  ngOnInit(): void {
    this.customerService.getAll().subscribe((resp) => {
      console.log(resp);
      this.customers = resp;
    });
  }

  deletar(id: any) {
    this.customerService.delete(id).subscribe((resp) => {
      console.log(resp);

      this.ngOnInit();
    });
  }
}
