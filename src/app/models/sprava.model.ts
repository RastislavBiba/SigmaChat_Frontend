export class Sprava {

  id: number;
  text: string;
  odosielatel: string;
  prijimatel: string
  id_miestnost: number;


  constructor(id: number, text: string, odosielatel: string, prijimatel: string, id_miestnost: number) {
    this.id = id;
    this.text = text;
    this.odosielatel = odosielatel;
    this.prijimatel = prijimatel;
    this.id_miestnost = id_miestnost;
  }
}
