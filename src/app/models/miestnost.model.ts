export class Miestnost{
  id: number;
  meno?: string;
  osoba?: string;
  spravy?: string;


  constructor(miestnost: Miestnost) {
    this.id = miestnost.id;
    this.meno = miestnost.meno;
    this.osoba = miestnost.osoba;
    this.spravy = miestnost.spravy;


  }
}
