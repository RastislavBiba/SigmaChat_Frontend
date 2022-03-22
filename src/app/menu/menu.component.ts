import { Component } from '@angular/core';
import {Router} from '@angular/router';

enum MENU { OSOBY, SPRAVY, VYPOZICKY }

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  menu = MENU;
  constructor(private router: Router) { }
  otvorMenu(m: MENU) {
    if (m === MENU.OSOBY) {
      this.router.navigate(['/osoba']);
    }
  }

}
