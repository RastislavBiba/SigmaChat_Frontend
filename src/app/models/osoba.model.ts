export class Osoba {
  id: number;
  login: string;
//
  miestnosti?: string;
  spravy?: string;
//



  constructor(osoba: Osoba) {
    this.id = osoba.id;
    this.login = osoba.login;
    this.miestnosti=osoba.miestnosti;
    this.spravy = osoba.spravy;


  }
}
