import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OdosielatelService {

  constructor() { }
  public setIdOdosielatela(value:string): void {
    sessionStorage.setItem('id_odosielatel', value);
  }

  public getIdOdosielatela(): string | null {
    return sessionStorage.getItem('id_odosielatel');
  }
}
