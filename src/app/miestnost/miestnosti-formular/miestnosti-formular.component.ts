import {Component, EventEmitter, Input, Output} from '@angular/core';
import{Miestnost} from "../../models/miestnost.model";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-miestnosti-formular',
  templateUrl: 'miestnosti-formular.component.html',
  styleUrls: ['miestnosti-formular.component.css']
})

export class MiestnostiFormularComponent {

  @Output()
  pridajMiestnost = new EventEmitter<Miestnost>();
  @Output()
  upravMiestnost = new EventEmitter<Miestnost>();

  @Input()
  set miestnosti(m: Miestnost | undefined){
    if(m){
      this.naplnForm(m)
    }
  }
  formular: FormGroup;
  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null)
   //   osoba: new FormControl(null)
    });
  }
  public pridaj(): void {
    this.pridajMiestnost.emit({
      id: Math.random().toString(),
      meno: this.formular.value.meno
      });
    this.formular.reset();
  }

  public uprav(): void {
    this.upravMiestnost.emit(this.formular.value);
    this.formular.reset();
  }

  public zrus(): void {
    this.formular.reset();
  }
  private naplnForm(miestnost: Miestnost): void {
    this.formular.controls['id'].setValue(miestnost.id);
    this.formular.controls['meno'].setValue(miestnost.meno);
    //this.formular.controls['user'].setValue(miestnost.osoba);
  }


}
