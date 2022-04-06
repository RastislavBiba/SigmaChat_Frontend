import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from "../../models/osoba.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-osoba-formular',
  templateUrl: 'osoba-formular.component.html',
  styleUrls: ['osoba-formular.component.css']
})

export class OsobaFormularComponent {

  @Output()
  pridajOsobu = new EventEmitter<Osoba>();
  @Output()
  upravOsobu = new EventEmitter<Osoba>();

  @Input()
  set osoba(o: Osoba | undefined){
    if(o){
      this.naplnForm(o)
    }
  }
  formular: FormGroup;
  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      login: new FormControl(null),
    });
  }
  public pridaj(): void {
    this.pridajOsobu.emit({id: Math.random(),login: this.formular.value.login});
    //this.osoba.login="";
    this.formular.reset();
  }

  public uprav(): void {
    this.upravOsobu.emit(this.formular.value);
    //this.osoba.meno="";
    this.formular.reset();
  }

  public zrus(): void {
    this.formular.reset();
  }
  private naplnForm(osoba: Osoba): void {
    /*
    treba zadat hodnoty pre vsetky formControls vo formGroup, ak nie, hodi error
    this.form.setValue({
      meno: osoba.meno,
      priezvisko: osoba.priezvisko
    });
    */
    /* netreba zadat vsetky hodnoty formControls vo formGroup
    this.form.patchValue({
      meno: osoba.meno,
      priezvisko: osoba.priezvisko
    });
     */
    // @ts-ignore
    this.formular.controls['id'].setValue(osoba.id);
    this.formular.controls['login'].setValue(osoba.login);
  }

}
