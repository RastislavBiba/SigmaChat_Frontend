import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Miestnost} from "../../models/miestnost.model";

@Component({
  selector: 'app-miestnost-zoznam',
  templateUrl: './miestnosti-zoznam.component.html',
  styleUrls: ['./miestnosti-zoznam.component.css']
})
export class MiestnostiZoznamComponent {

  @Input()
  miestnosti: Miestnost[] = []

  @Output()
  upravMiestnost: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazMiestnost: EventEmitter<number> = new EventEmitter<number>();

  uprav(miestnostId: number): void {
    this.upravMiestnost.emit(miestnostId);
  }

  zmaz(miestnostId: number): void {
    this.zmazMiestnost.emit(miestnostId);
  }
}
