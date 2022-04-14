import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from '../../models/osoba.model';

@Component({
  selector: 'app-osoby-zoznam',
  templateUrl: 'osoby-zoznam.component.html',
  styleUrls: ['osoby-zoznam.component.css']
})
export class OsobyZoznamComponent {

  @Input()
  osoby: Osoba[] = [];

  @Output()
  upravOsobu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  posliSpravu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazOsobu: EventEmitter<number> = new EventEmitter<number>();

  uprav(customerId: number): void {
    this.upravOsobu.emit(customerId);
  }

  zmaz(customerId: number): void {
    this.zmazOsobu.emit(customerId);
  }

  posli(customerId: number): void {
    this.posliSpravu.emit(customerId);
  }
}
