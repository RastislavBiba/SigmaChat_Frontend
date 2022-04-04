import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Miestnost} from "../../models/miestnost.model";

@Component({
  selector: 'app-miestnost-stranka',
  templateUrl: 'miestnosti-stranka.component.html',
  styleUrls: ['miestnosti-stranka.component.css']
})
export class MiestnostiStrankaComponent {
  miestnosti: Miestnost[] = [];

  miestnostNaUpravu?: Miestnost;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    console.log('1');
    const vysledok: Observable<Miestnost[]> = this.http.get<Miestnost[]>('http://localhost:8080/api/customers');
    vysledok.subscribe(data => {
      console.log('prislo:' + data);
    });
    console.log('2');
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(miestnost: Miestnost): void {
    this.miestnosti.push(miestnost);
  }

  uprav(miestnost: Miestnost): void {
    const index = this.miestnosti.findIndex(miestnostArray => miestnostArray.id === miestnost.id);
    if (index !== -1) {
      this.miestnosti[index] = miestnost;
    }
  }
  upravZoZoznamu(miestnost: Miestnost): void {
    this.miestnostNaUpravu = miestnost;
  }

  zmazZoZoznamu(miestnost: Miestnost): void {
    const index = this.miestnosti.findIndex(miestnostArray => miestnostArray.id === miestnost.id);
    if (index !== -1) {
      this.miestnosti.splice(index, 1);
    }
  }
}
