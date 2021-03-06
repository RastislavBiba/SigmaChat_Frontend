import {Component, OnDestroy, OnInit} from '@angular/core';
import {Sprava} from "../../models/sprava.model";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {MessageServiceService} from "../../../sprava-service.service";
import {RoomServiceService} from "../../../miestnost-service.service";
import {Miestnost} from "../../models/miestnost.model";

@Component({
  selector: 'app-sprava-stranka',
  templateUrl: 'sprava-stranka.component.html',
  styleUrls: ['sprava-stranka.component.css']
})
export class SpravaStrankaComponent implements OnInit, OnDestroy{
  miestnosti: Miestnost[] = [];
  messages: Sprava[] = [];
  spravaNaUpravu?: Sprava;
  miestnostAkoPrijemca?: number;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private messageService: MessageServiceService, private roomService: RoomServiceService){}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.refreshMessages();
    this.refreshRooms();
  }

  refreshMessages(): void {
    this.subscription.add(this.messageService.getMessages().subscribe(data => {
      console.log('Prisli spravy:',data);
      const filteredMessages: Array<Sprava> = this.messages.filter(message => message.prijemca === this.miestnostAkoPrijemca);
      this.messages=data;
      console.log('Prijemca:' ,this.spravaNaUpravu?.prijemca);
      console.log('filter message:' ,filteredMessages);
    }));

  }


  refreshRooms(): void {
    this.subscription.add(this.roomService.getRooms().subscribe(data => {
      this.miestnosti = data;
    }));
  }

    odosli(sprava: Sprava): void {
    console.log("2 odosielam");
      this.messageService.createMessage(sprava).subscribe(data=> {
        console.log('prislo:' + data);
      });
      window.location.reload();
    }

  nastavMiestnostAkoPrijemcu(roomId: number): void {
    this.miestnostAkoPrijemca = roomId;
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  uprav(sprava: Sprava):void{
    console.log('idem upravovat');
    if(sprava.id!==undefined) {
      this.messageService.updateMessage(sprava.id, sprava).subscribe(data => {
        console.log('upravilo:' + data);
      });
    }
  }

  upravZoZoznamu(messageId: number): void{
    this.messageService.getMessage(messageId).subscribe(data => {
      console.log('prislo: ' , data);
    });
  }

  zmazZoZoznamu(messageId: number): void {
    this.subscription.add(this.messageService.deleteMessage(messageId).subscribe(data => {
      this.refreshMessages();
      console.log('odstranil som:' + data);
    }));
  }


}
