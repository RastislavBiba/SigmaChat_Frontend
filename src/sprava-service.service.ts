import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sprava} from "./app/models/sprava.model";

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private apiUrl = 'http://localhost:8080/api/messages';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Sprava[]> {
    return this.http.get<Sprava[]>( `${this.apiUrl}`);
  }

  getMessage(messageId: number): Observable<Sprava> {
    return this.http.get<Sprava>( `${this.apiUrl}/${messageId}`);
  }

  createMessage(sprava: Sprava): Observable<Sprava> {
    return this.http.post<Sprava>(`${this.apiUrl}`, sprava);
  }

  updateMessage(messageId: number, sprava: Sprava): Observable<Sprava> {
    return this.http.put<Sprava>( `${this.apiUrl}/${messageId}`, sprava);
  }

  deleteMessage(messageId: number): Observable<void> {
    return this.http.delete<void>( `${this.apiUrl}/${messageId}`);
  }

}
