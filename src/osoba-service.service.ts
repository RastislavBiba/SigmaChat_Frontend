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
  getBooks(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>( `${this.apiUrl}`);
  }

  getMessage(messageId: number): Observable<Osoba> {
    return this.http.get<Osoba>( `${this.apiUrl}/${messageId}`);
  }

  createMessage(sprava: Osoba): Observable<Osoba> {
    return this.http.post<Osoba>(`${this.apiUrl}`, sprava);
  }

  updateMessage(messageId: number, sprava: Osoba): Observable<Osoba> {
    return this.http.put<Osoba>( `${this.apiUrl}/${messageId}`, sprava);
  }

  deleteMessage(messageId: number): Observable<void> {
    return this.http.delete<void>( `${this.apiUrl}/${messageId}`);
  }

}
