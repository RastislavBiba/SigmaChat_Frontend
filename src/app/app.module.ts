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
import {MiestnostiFormularComponent } from './miestnost/miestnosti-formular/miestnosti-formular.component';
import {MiestnostiZoznamComponent } from './miestnost/miestnosti-zoznam/miestnosti-zoznam.component';
import {MiestnostiStrankaComponent } from './miestnost/miestnosti-stranka/miestnosti-stranka.component';
import {MenuComponent} from "./menu/menu.component";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    OsobaFormularComponent,
    OsobyZoznamComponent,
    OsobaStrankaComponent,
    SpravaFormularComponent,
    SpravaStrankaComponent,
    MiestnostiFormularComponent,
    MiestnostiZoznamComponent,
    MiestnostiStrankaComponent,
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
        MatButtonModule,
        MatInputModule,
        MatTabsModule,
        MatToolbarModule,
        MatSidenavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
