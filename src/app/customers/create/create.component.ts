import { CustomerService } from './../customer.service';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  formBuilder = inject(FormBuilder);
  customerService = inject(CustomerService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  customer: any;

  idCustomer = this.activatedRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl('', [Validators.email]),
    });

    if (this.idCustomer) {
      this.customerService.getbyid(this.idCustomer).subscribe((resp) => {
        this.customer = resp;
        this.form.patchValue(this.customer);
      });
    }
  }

  save() {
    console.log(this.idCustomer);
    if (this.idCustomer) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    this.customerService.create(this.form.value).subscribe((resp) => {
      console.log(resp);
      this.router.navigate(['clientes']);
    });
  }

  update() {
    this.customerService
      .update(this.form.value, this.idCustomer)
      .subscribe((resp) => {
        console.log(resp);
        this.router.navigate(['clientes']);
      });
  }
}
