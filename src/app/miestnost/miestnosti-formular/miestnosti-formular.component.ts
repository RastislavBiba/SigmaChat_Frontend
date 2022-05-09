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
      name: new FormControl(null),
      id_user: new FormControl(null),

    });
  }
  public odosli(): void {
    console.log("Odosielam");
    this.pridajMiestnost.emit({
      id: Math.random(),
      name: this.formular.value.name,
      idUser: this.formular.value.idUser,
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
    console.log(this.formular.value.name);
    this.formular.controls['name'].setValue(miestnost.name);
    this.formular.controls['idUser'].setValue(miestnost.idUser);
    console.log("Naplnam idUser: ", this.formular.value.idUser);
  }


}
