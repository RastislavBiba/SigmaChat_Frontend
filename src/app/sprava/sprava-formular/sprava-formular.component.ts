import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Sprava} from "../../models/sprava.model";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-sprava-formular',
  templateUrl: 'sprava-formular.component.html',
  styleUrls: ['sprava-formular.component.css']
})
export class SpravaFormularComponent {


  @Output()
  pridajSpravu = new EventEmitter<Sprava>();
  @Output()
  upravSpravu = new EventEmitter<Sprava>();

  @Output()
  odstranSpravu = new EventEmitter<Sprava>();

  @Input()
  set sprava(s: Sprava | undefined) {
    if (s) {
      this.naplnForm(s)
    }
  }

  formular:FormGroup;

  constructor() {
    this.formular = new FormGroup({
      id: new FormControl(null),
      text_spravy: new FormControl(null),
      odosielatel: new FormControl("Rasto"),
      prijimatel: new FormControl(null)
    });
  }
  public odosli(): void {
    console.log("1");
    this.pridajSpravu.emit({id: Math.random(),text: this.formular.value.text_spravy, odosielatel: this.formular.value.odosielatel, prijimatel: this.formular.value.prijimatel});
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
    this.formular.controls['odosielatel'].setValue(sprava.odosielatel);
    this.formular.controls['prijimatel'].setValue(sprava.prijimatel);
  }
}
