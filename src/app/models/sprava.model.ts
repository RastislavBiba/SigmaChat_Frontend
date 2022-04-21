export class Sprava {

  id: number;
  text: string;
  id_odosielatel: string;
  prijemca: number;


  constructor(id: number, text: string, id_odosielatel: string, prijemca: number) {
    this.id = id;
    this.text = text;
    this.id_odosielatel = id_odosielatel;
    this.prijemca = prijemca;
  }
}
