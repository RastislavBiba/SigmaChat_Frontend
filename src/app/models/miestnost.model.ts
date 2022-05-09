import {Osoba} from "./osoba.model";

export class Miestnost{
  id: number;
  name: string;
  idUser: Osoba [];


  constructor(id: number, name: string, idUser: Osoba[]) {
    this.id = id;
    this.name = name;
    this.idUser = idUser;
  }
}
