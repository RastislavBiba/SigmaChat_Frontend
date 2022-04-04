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
  upravMiestnost: EventEmitter<Miestnost> = new EventEmitter<Miestnost>();

  @Output()
  zmazMiestnost: EventEmitter<Miestnost> = new EventEmitter<Miestnost>();

  uprav(miestnost: Miestnost): void {
    this.upravMiestnost.emit(miestnost);
  }

  zmaz(miestnost: Miestnost): void {
    this.zmazMiestnost.emit(miestnost);
  }
}
