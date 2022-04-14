import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Miestnost} from "./app/models/miestnost.model";


@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  private apiUrl = 'http://localhost:8080/api/rooms';

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Miestnost[]> {
    return this.http.get<Miestnost[]>( `${this.apiUrl}`);
  }

  getRoom(miestnostId: number): Observable<Miestnost> {
    return this.http.get<Miestnost>( `${this.apiUrl}/${miestnostId}`);
  }
  createRoom(Miestnost: Miestnost): Observable<Miestnost> {
    return this.http.post<Miestnost>(`${this.apiUrl}`, Miestnost);
  }

  updateRoom(miestnostId: number, Miestnost: Miestnost): Observable<Miestnost> {
    return this.http.put<Miestnost>( `${this.apiUrl}/${miestnostId}`, Miestnost);
  }

  deleteRoom(miestnostId: number): Observable<void> {
    console.log('Miestnost-service.ts');
    return this.http.delete<void>( `${this.apiUrl}/${miestnostId}`);
  }

}
