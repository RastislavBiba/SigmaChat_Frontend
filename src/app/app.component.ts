import {Router} from "@angular/router";
import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Sprava} from "./models/sprava.model";
enum MENU{
  OSOBY, SPRAVY, MIESTNOSTI,
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

}

