import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Sprava} from "../../models/sprava.model";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-sprava-formular',
  templateUrl: 'sprava-formular.component.html',
  styleUrls: ['sprava-formular.component.css']
})
export class SpravaFormularComponent {

  @Input()
  set sprava(s: Sprava | undefined) {
    if (s) {
      this.naplnForm(s)
    }
  }

  @Input()
  set prijemca(roomId: number | undefined) {
    if (roomId !== undefined) {
      this.formular.controls['prijemca'].setValue(roomId);
    }
  }

  @Output()
  pridajSpravu = new EventEmitter<Sprava>();

  @Output()
  upravSpravu = new EventEmitter<Sprava>();

  @Output()
  odstranSpravu = new EventEmitter<Sprava>();

  formular:FormGroup;

  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      text_spravy: new FormControl(null),
      id_odosielatel: new FormControl(13),
      prijemca: new FormControl(null),
    });
  }
  public odosli(): void {
    console.log("Odosielam");
    this.pridajSpravu.emit({id: Math.random(),text: this.formular.value.text_spravy, id_odosielatel: this.formular.value.id_odosielatel, prijemca: this.formular.value.prijemca});
    this.formular.reset();

  }
  public uprav(): void {
    this.upravSpravu.emit(this.formular.value);
    this.formular.reset();
  }
  public zrus(): void {
    this.formular.reset();
  }

  public vymaz(): void{
    this.sprava = undefined;
    this.formular.reset();
  }

  private naplnForm(sprava: Sprava): void {

    this.formular.controls['id'].setValue(sprava.id);
    this.formular.controls['text_spravy'].setValue(sprava.text);
    this.formular.controls['id_odosielatel'].setValue(sprava.id_odosielatel);
    this.formular.controls['prijemca'].setValue(sprava.prijemca);
  }
}
