import { Component, OnInit } from '@angular/core';
import {Sprava} from "../../models/sprava.model";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {MessageServiceService} from "../../../sprava-service.service";

@Component({
  selector: 'app-sprava-stranka',
  templateUrl: 'sprava-stranka.component.html',
  styleUrls: ['sprava-stranka.component.css']
})
export class SpravaStrankaComponent implements OnInit{

  messages: Sprava[] = [];

  spravaNaUpravu?: Sprava;

  private subscription: Subscription = new Subscription();
  constructor(private router: Router, private http: HttpClient, private messageService: MessageServiceService){}

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
    const index = this.messages.findIndex(spravaZPola => spravaZPola.id === sprava.id);
    if (index !== -1) {
      this.messages[index] = sprava;
    }
  }

  upravZoZoznamu(sprava: Sprava):void{
    this.spravaNaUpravu = sprava;
  }

  zmazZoZoznamu(sprava: Sprava): void {
    const index = this.messages.findIndex(spravaArray => spravaArray.id === sprava.id);
    if (index !== -1) {
      this.messages.splice(index, 1);
    }
  }

}
