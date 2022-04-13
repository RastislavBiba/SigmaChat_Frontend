import {Component, EventEmitter, Input, Output} from '@angular/core';
import{Miestnost} from "../../models/miestnost.model";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-miestnosti-formular',
  templateUrl: 'miestnosti-formular.component.html',
  styleUrls: ['miestnosti-formular.component.css']
})

export class MiestnostiFormularComponent {

  @Input()
  set miestnosti(m: Miestnost | undefined){
    if(m){
      this.naplnForm(m)
    }
  }
  @Output()
  pridajMiestnost = new EventEmitter<Miestnost>();
  @Output()
  upravMiestnost = new EventEmitter<Miestnost>();
  @Output()
  odstranMiestnost = new EventEmitter<Miestnost>();

  formular: FormGroup;
  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null),
      osoba: new FormControl(null)
    });
  }
  public pridaj(): void {
    console.log("Odosielam");
    this.pridajMiestnost.emit({
      id: Math.random(),
      meno: this.formular.value.meno,
      osoba: this.formular.value.osoba
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
  public vymaz(): void{
    this.miestnosti = undefined;
    this.formular.reset();
  }
  private naplnForm(miestnost: Miestnost): void {
    this.formular.controls['id'].setValue(miestnost.id);
    this.formular.controls['meno'].setValue(miestnost.meno);
    this.formular.controls['user'].setValue(miestnost.osoba);
  }


}
