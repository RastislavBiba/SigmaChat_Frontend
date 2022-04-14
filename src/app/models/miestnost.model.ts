export class Miestnost{
  id: number;
  name: string;
  user: string;
  messages: string;


  constructor(id: number, name: string, user: string, messages: string) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.messages = messages;
  }
}
