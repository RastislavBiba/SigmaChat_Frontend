export class Osoba {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  email: string


  constructor(id: number, login: string, firstName: string, lastName: string, email: string) {
    this.id = id;
    this.login = login;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
