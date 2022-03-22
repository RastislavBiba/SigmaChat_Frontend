import { Component, OnInit } from '@angular/core';
import {Sprava} from "../../models/sprava.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sprava-stranka',
  templateUrl: 'sprava-stranka.component.html',
  styleUrls: ['sprava-stranka.component.css']
})
export class SpravaStrankaComponent implements OnInit{

  messages: Sprava[] = [];

  spravaNaUpravu?: Sprava;

  constructor(private router: Router, private http: HttpClient){}

  ngOnInit(): void{
    console.log('1');
    const vysledok: Observable<Sprava[]> = this.http.get<Sprava[]>('http://localhost:8080/api/messages');
    vysledok.subscribe(data => {
    console.log('prislo:' + data);
    });
    console.log('2');
    }
    odosli(sprava: Sprava): void {
    this.messages.push(sprava);

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
