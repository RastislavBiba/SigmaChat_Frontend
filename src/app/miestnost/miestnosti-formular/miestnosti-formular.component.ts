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

    });
  }
  public odosli(): void {
    console.log("Odosielam");
    this.pridajMiestnost.emit({
      id: Math.random(),
      name: this.formular.value.name,
      user_id: this.formular.value.user_id,
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
    this.formular.controls['name'].setValue(miestnost.name);
    this.formular.controls['user'].setValue(miestnost.user_id);
  }


}
