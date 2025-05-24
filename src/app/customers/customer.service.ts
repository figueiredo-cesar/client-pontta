import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

interface Customer {
  id?: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  baseUrl = `${environment.baseUrl}customers`;

  http = inject(HttpClient);

  getAll() {
    return this.http.get(this.baseUrl);
  }

  getbyid(id: any) {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  create(body: any) {
    return this.http.post(this.baseUrl, body);
  }

  update(body: any, id: any) {
    const url = this.baseUrl + `/${id}`;
    return this.http.put(url, body);
  }

  delete(id: any) {
    const url = this.baseUrl + `/${id}`;
    return this.http.delete(url);
  }
}
