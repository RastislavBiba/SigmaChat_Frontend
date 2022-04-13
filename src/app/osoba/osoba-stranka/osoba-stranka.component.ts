import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Osoba} from '../../models/osoba.model';
import {Subscription} from 'rxjs';
import {CustomerServiceService} from "../../../osoba-service.service";


@Component({
  selector: 'app-osoba-stranka',
  templateUrl: 'osoba-stranka.component.html',
  styleUrls: ['osoba-stranka.component.css']
})
export class OsobaStrankaComponent implements OnInit {

  osoby: Osoba[] = [];

  osobaNaUpravu?: Osoba;

  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.refreshCustomers();
  }

  private refreshCustomers() {
    this.subscription.add(this.customerService.getCustomers().subscribe(data => {
      this.osoby=data;
      console.log('Prislo:',data);
    }));
  }

  pridaj(osoba: Osoba): void {
    console.log("2 odosielam");
    this.customerService.createCustomer(osoba).subscribe(data=> {
      console.log('prislo:' + data);
    });
  }

  uprav(osoba: Osoba): void {
    console.log('idem upravovat');
    if(osoba.id!==undefined) {
      this.customerService.updateCustomer(osoba.id, osoba).subscribe(data => {
        console.log('upravilo:' + data);
      });
    }
  }

  upravZoZoznamu(customerId: number): void {
    this.customerService.getCustomer(customerId).subscribe(data => {
      console.log('prislo: ' , data);
    });
  }

  zmazZoZoznamu(customerId: number): void {
    this.subscription.add(this.customerService.deleteCustomer(customerId).subscribe(data => {
      this.refreshCustomers();
      console.log('odstranil som:' + data);
    }));
  }


}
