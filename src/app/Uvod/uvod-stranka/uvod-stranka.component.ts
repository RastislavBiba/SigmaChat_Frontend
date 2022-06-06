import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Osoba} from "../../models/osoba.model";
import {Sprava} from "../../models/sprava.model";


@Component({
  selector: 'app-uvod-stranka',
  templateUrl: './uvod-stranka.component.html',
  styleUrls: ['./uvod-stranka.component.css']
})
export class UvodStrankaComponent implements OnInit {
  _id_odosielatel: string  = '0';



 @Output()
 pridajOdosielatela = new EventEmitter<Sprava>();


  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }
  odosli(id: string): void {
    sessionStorage.setItem('id_odosielatel', this._id_odosielatel);
    console.log(this._id_odosielatel);
  }

  prejdi(): void{

    this.router.navigate(['/sprava']);
    console.log("Posielam odosielatela " + this._id_odosielatel);
  }
}
