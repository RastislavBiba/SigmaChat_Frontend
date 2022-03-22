import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Sprava} from "../../models/sprava.model";

@Component({
  selector: 'app-sprava-zoznam',
  templateUrl: 'sprava-zoznam.component.html',
  styleUrls: ['sprava-zoznam.component.css']
})
export class SpravaZoznamComponent {

  @Input()
  messages: Sprava[] = []

  @Output()
  upravSpravu: EventEmitter<Sprava> = new EventEmitter<Sprava>();

  @Output()
  zmazSpravu: EventEmitter<Sprava> = new EventEmitter<Sprava>();


  uprav(sprava: Sprava):void {
    this.upravSpravu.emit(sprava);
  }
 zmaz(sprava: Sprava): void {
    this.zmazSpravu.emit(sprava);
 }
}
