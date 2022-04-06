export class Sprava {

  id: number;
  text: string;
  odosielatel: string;
  prijimatel: string


  constructor(id: number, text_spravy: string, odosielatel: string, prijimatel: string) {
    this.id = id;
    this.text = text_spravy;
    this.odosielatel = odosielatel;
    this.prijimatel = prijimatel;
  }
}
