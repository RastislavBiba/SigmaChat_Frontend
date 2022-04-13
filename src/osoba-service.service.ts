import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Osoba} from "./app/models/osoba.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>( `${this.apiUrl}`);
  }

  getCustomer(customerId: number): Observable<Osoba> {
    return this.http.get<Osoba>( `${this.apiUrl}/${customerId}`);
  }

  createCustomer(osoba: Osoba): Observable<Osoba> {
    return this.http.post<Osoba>(`${this.apiUrl}`, osoba);
  }

  updateCustomer(customerId: number, customer: Osoba): Observable<Osoba> {
    return this.http.put<Osoba>( `${this.apiUrl}/${customerId}`, customer);
  }

  deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>( `${this.apiUrl}/${customerId}`);
  }

}
