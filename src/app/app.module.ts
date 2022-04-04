import {NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OsobaFormularComponent } from './osoba/osoba-formular/osoba-formular.component';
import {OsobyZoznamComponent } from './osoba/osoby-zoznam/osoby-zoznam.component';
import {OsobaStrankaComponent } from './osoba/osoba-stranka/osoba-stranka.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule } from './app-routing.module';
import {SpravaZoznamComponent} from "./sprava/sprava-zoznam/sprava-zoznam.component";
import {SpravaFormularComponent } from './sprava/sprava-formular/sprava-formular.component';
import {SpravaStrankaComponent} from "./sprava/sprava-stranka/sprava-stranka.component";
import {VypozickaFormularComponent } from './vypozicky/vypozicka-formular/vypozicka-formular.component';
import {VypozickyZoznamComponent } from './vypozicky/vypozicky-zoznam/vypozicky-zoznam.component';
import {VypozickyStrankaComponent } from './vypozicky/vypozicky-stranka/vypozicky-stranka.component';
import {MenuComponent} from "./menu/menu.component";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    OsobaFormularComponent,
    OsobyZoznamComponent,
    OsobaStrankaComponent,
    SpravaFormularComponent,
    SpravaStrankaComponent,
    VypozickaFormularComponent,
    VypozickyZoznamComponent,
    VypozickyStrankaComponent,
    SpravaZoznamComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
