export class Sprava {

  id?: string;
  text_spravy: string;
  odosielatel: string;
  prijimatel: string


  constructor(id: string, text_spravy: string, odosielatel: string, prijimatel: string) {
    this.id = id;
    this.text_spravy = text_spravy;
    this.odosielatel = odosielatel;
    this.prijimatel = prijimatel;
  }
}