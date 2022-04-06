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
  upravSpravu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazSpravu: EventEmitter<number> = new EventEmitter<number>();


  uprav(messageId: number):void {
    this.upravSpravu.emit(messageId);
  }
 zmaz(messageId: number): void {
    console.log('sprava-zoznam.component.ts')
    this.zmazSpravu.emit(messageId);
 }
}
