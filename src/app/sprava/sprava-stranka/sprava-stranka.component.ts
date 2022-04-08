import {Component, OnDestroy, OnInit} from '@angular/core';
import {Sprava} from "../../models/sprava.model";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {MessageServiceService} from "../../../sprava-service.service";

@Component({
  selector: 'app-sprava-stranka',
  templateUrl: 'sprava-stranka.component.html',
  styleUrls: ['sprava-stranka.component.css']
})
export class SpravaStrankaComponent implements OnInit, OnDestroy{

  messages: Sprava[] = [];
  spravaNaUpravu?: Sprava;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private messageService: MessageServiceService){}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.refreshMessages();
  }

  refreshMessages(): void {
    this.subscription.add(this.messageService.getMessages().subscribe(data => {
      console.log('Prislo:',data);
      this.messages=data;
    }));
  }


    odosli(sprava: Sprava): void {
    console.log("2");
      this.messageService.createMessage(sprava).subscribe(data=> {
        console.log('prislo:' + data);
      });

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
    console.log('sprava-stranka.component.ts');
    this.subscription.add(this.messageService.deleteMessage(messageId).subscribe(data => {
      this.refreshMessages();
      console.log('odstranil som:' + data);
    }));
  }


}
