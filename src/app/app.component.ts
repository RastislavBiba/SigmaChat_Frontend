import {Router} from "@angular/router";
import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
enum MENU{
  OSOBY, SPRAVY, MIESTNOSTI,
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'SigmaChat';
  Kus = 0;
  mnozstvo = 0;
  Vysledok=0;

  menu = MENU;
  aktMenu = MENU.OSOBY;

  //vstup = 'qwe';
  //zobraz = true;
  zakaz = false;
  persons: any[] = [];
  osoba = {id:"", name:"", contact:""};
  messages: any[] = [];
  sprava = {id:"",text:"", odosielatel:"", prijimatel:"", available:""};
  pozicka = {id:"",kniha:"", osoba:""};
  pozicky: any[] = [];

  form: FormGroup;


  public pocitaj(){
    this.Vysledok = this.Kus * this.mnozstvo;

  }
  public pracuj(){
    alert("Hello");
  }

  dec:any = 0;
  Binary = "";
  bin7= false;bin6= false;bin5= false;bin4= false;bin3= false;bin2= false;bin1= false;bin0= false;
  true = 1;
  public zmenCislo() {
    this.Binary = ""
    let Cislo = parseInt(this.dec) ;
    this.Binary = Cislo.toString(2);
    for (let i = this.Binary.length-1; i >= 0 ; i--) {
      if (parseInt(this.Binary.charAt(i)) == 1){
        switch(7 - ((this.Binary.length) - (i+1))){
          case 0:
            this.bin7 = Boolean(1);
            break;
          case 1:
            this.bin6 = Boolean(1);
            break;
          case 2:
            this.bin5 = Boolean(1);
            break;
          case 3:
            this.bin4 = Boolean(1);
            break;
          case 4:
            this.bin3 = Boolean(1);
            break;
          case 5:
            this.bin2 = Boolean(1);
            break;
          case 6:
            this.bin1 = Boolean(1);
            break;
          case 7:
            this.bin0 = Boolean(1);
            break;

        }
      }
      else {
        switch (7 - ((this.Binary.length) - (i + 1))) {
          case 0:
            this.bin7 = Boolean(0);
            break;
          case 1:
            this.bin6 = Boolean(0);
            break;
          case 2:
            this.bin5 = Boolean(0);
            break;
          case 3:
            this.bin4 = Boolean(0);
            break;
          case 4:
            this.bin3 = Boolean(0);
            break;
          case 5:
            this.bin2 = Boolean(0);
            break;
          case 6:
            this.bin1 = Boolean(0);
            break;
          case 7:
            this.bin0 = Boolean(0);
            break;

        }
      }
    }
  };

  public pridajcheck(){
    this.Binary = "";
    const bin = [this.bin7, this.bin6, this.bin5, this.bin4, this.bin3, this.bin2, this.bin1, this.bin0];
    for (let i =0; i <= 7; i++) {
      let index = bin[i];
      let retazec = Number(index);
      this.Binary = this.Binary.concat(retazec.toString());
    }
    this.dec = parseInt(this.Binary ,2);

  };

  constructor(private router: Router) {
    this.form = new FormGroup({
      cenaks: new FormControl(),
      mnozstvo: new FormControl(),
    });
  }
  //public pocitaj(){
  //  this.Vysledok = this.Kus * this.mnozstvo;
 // }
 // public pracuj(): void{
 //   alert("test");
 // }
  //public ukazTo(): void{
  //  alert("Hura");
  //}
  public test(){
    this.zakaz = !this.zakaz;
  }
  public nastavMenu(m: MENU){
    this.aktMenu = m;

    // preroutuj do komponenty podla menu
    /*if (m == MENU.OSOBY) {
      this.router.navigate(['/osoba']);
    }
    if (m == MENU.KNIHY) {
      this.router.navigate(['/sprava']);
    }*/

  }
  public osoby(){
    this.aktMenu = MENU.OSOBY;
  }
  public spravy(){
    this.aktMenu = MENU.SPRAVY;
  }
  public miestnosti(){
    this.aktMenu = MENU.MIESTNOSTI;
  }
  public pridaj(){
    let o2 = {id: this.osoba.id, name: this.osoba.name, contact: this.osoba.contact}
    this.persons.push(o2);
  }
  public pridajs(){
    let m2 = {id: this.sprava.id, text: this.sprava.text, odosielatel: this.sprava.odosielatel, prijimatel: this.sprava.prijimatel}
    this.messages.push(m2);
  }

  public pridajMirstnost() {
    let v2 = {id: this.pozicka.id, kniha: this.sprava, osoba: this.osoba}
    this.pozicky.push(v2);
  }
  otvorMenu(m: MENU) {
    // preroutuj do komponenty podla menu
    if (m == MENU.OSOBY) {
      this.router.navigate(['/osoba']);
    }
    if (m == MENU.SPRAVY) {
      this.router.navigate(['/sprava']);
    }
    if (m == MENU.MIESTNOSTI) {
      this.router.navigate(['/miestnost']);
    }
  }
}

