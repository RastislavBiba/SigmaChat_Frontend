export class Miestnost{
  id: number;
  name: string;
  user_id: number;


  constructor(id: number, name: string, user_id: number) {
    this.id = id;
    this.name = name;
    this.user_id = user_id;
  }
}
