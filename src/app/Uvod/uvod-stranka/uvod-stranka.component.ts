import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-uvod-stranka',
  templateUrl: './uvod-stranka.component.html',
  styleUrls: ['./uvod-stranka.component.css']
})
export class UvodStrankaComponent implements OnInit {

  formular:FormGroup;

  constructor(private router: Router) {
    this.formular = new FormGroup({
          prijemca: new FormControl(null),
    });
  }

  ngOnInit(): void {
  }
 odosli(): void{
    console.log("Posielam spravu");
    this.router.navigate(['/sprava']);
}
}
