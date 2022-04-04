export class Osoba {
  id?: string;
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
