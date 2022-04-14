import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from "../../models/osoba.model";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-osoba-formular',
  templateUrl: 'osoba-formular.component.html',
  styleUrls: ['osoba-formular.component.css']
})

export class OsobaFormularComponent {

  @Input()
  set osoba(o: Osoba | undefined){
    if(o){
      this.naplnForm(o)
    }
  }
  @Output()
  pridajOsobu = new EventEmitter<Osoba>();
  @Output()
  upravOsobu = new EventEmitter<Osoba>();
  @Output()
  odstranOsobu = new EventEmitter<Osoba>();

  formular: FormGroup;
  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      email: new FormControl(null),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      login: new FormControl(null),

    });
  }
  public odosli(): void {
    console.log("Odosielam");
    this.pridajOsobu.emit({id: Math.random(),login: this.formular.value.login, firstName: this.formular.value.firstName, lastName: this.formular.value.lastName, email: this.formular.value.email});
    this.formular.reset();
  }

  public uprav(): void {
    this.upravOsobu.emit(this.formular.value);
    this.formular.reset();
  }

  public zrus(): void {
    this.formular.reset();
  }

  public vymaz(): void{
    this.osoba = undefined;
    this.formular.reset();
  }

  private naplnForm(osoba: Osoba): void {
    this.formular.controls['id'].setValue(osoba.id);
    this.formular.controls['login'].setValue(osoba.login);
    this.formular.controls['firstName'].setValue(osoba.firstName);
    this.formular.controls['lastName'].setValue(osoba.lastName);
    this.formular.controls['email'].setValue(osoba.email);

  }

}
