import { CreateComponent } from './customers/create/create.component';
import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

export const routes: Routes = [
  { path: 'clientes', component: CustomersComponent },
  { path: 'clientes/clientes-save', component: CreateComponent },
  { path: 'clientes/clientes-save/:id', component: CreateComponent },
];
