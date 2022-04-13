import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Miestnost} from "../../models/miestnost.model";
import {RoomServiceService} from "../../../miestnost-service.service";

@Component({
  selector: 'app-miestnost-stranka',
  templateUrl: 'miestnosti-stranka.component.html',
  styleUrls: ['miestnosti-stranka.component.css']
})
export class MiestnostiStrankaComponent {
  miestnosti: Miestnost[] = [];
  miestnostNaUpravu?: Miestnost;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private roomService: RoomServiceService) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.refreshRooms();
  }

  refreshRooms(): void {
    this.subscription.add(this.roomService.getRooms().subscribe(data => {
      console.log('Prislo:', data);
      this.miestnosti = data;
    }));
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(miestnost: Miestnost): void {
    console.log("2");
    this.roomService.createRoom(miestnost).subscribe(data=> {
      console.log('prislo:' + data);
    });
  }

  uprav(miestnost: Miestnost): void {
    if (miestnost.id !== undefined) {
      this.roomService.updateRoom(miestnost.id, miestnost).subscribe(data => {
        console.log('upravilo:' + data);
      });
    }
  }

  upravZoZoznamu(miestnostId: number): void {
    this.roomService.getRoom(miestnostId).subscribe(data => {
      console.log('prislo: ', data);
    });
  }

  zmazZoZoznamu(miestnostId: number): void {
    console.log('sprava-stranka.component.ts');
    this.subscription.add(this.roomService.deleteRoom(miestnostId).subscribe(data => {
      this.refreshRooms();
      console.log('odstranil som:' + data);
    }));
  }
}
