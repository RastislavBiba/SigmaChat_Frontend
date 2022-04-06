import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {OsobyZoznamComponent} from "../osoba/osoby-zoznam/osoby-zoznam.component";
import {MessageServiceService} from "../../sprava-service.service";

enum MENU { OSOBY, SPRAVY, MIESTNOSTI }

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
  menu = MENU;
  constructor(private router: Router, private messageServiceService: MessageServiceService) { }

  otvorMenu(m: MENU) {
    if (m === MENU.OSOBY) {
      this.router.navigate(['/osoba']);
    }
    if (m === MENU.SPRAVY) {
      this.router.navigate(['/sprava']);
    }
    if (m === MENU.MIESTNOSTI) {
      this.router.navigate(['/miestnost']);
    }
  }

}
