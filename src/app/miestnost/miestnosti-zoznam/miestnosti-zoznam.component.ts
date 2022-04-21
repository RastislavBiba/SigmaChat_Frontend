import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Miestnost} from "../../models/miestnost.model";
import {Sprava} from "../../models/sprava.model";

@Component({
  selector: 'app-miestnost-zoznam',
  templateUrl: './miestnosti-zoznam.component.html',
  styleUrls: ['./miestnosti-zoznam.component.css']
})
export class MiestnostiZoznamComponent {

  @Input()
  miestnosti: Miestnost[] = []

  @Input()
  messages: Sprava[] = []

  @Output()
  upravMiestnost: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazMiestnost: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  nastavMiestnost: EventEmitter<number> = new EventEmitter<number>();


  uprav(roomId: number): void {
    this.upravMiestnost.emit(roomId);
  }

  zmaz(roomId: number): void {
    this.zmazMiestnost.emit(roomId);
  }

  nastav(roomId: number): void {
    console.log('NASTAVUJEM', roomId);
    this.nastavMiestnost.emit(roomId);
  }
  najdiPoslednuSpravu(roomId: number): string {
    console.log('roomId: ', roomId);
    const poslednaSprava = this.messages.find(message => message.prijemca === roomId)?.text;
    console.log('posledna sprava: ', poslednaSprava);
    if (poslednaSprava === undefined){
      return "Nemate ziadne spravy";
    }
    return (poslednaSprava);
  }
}
